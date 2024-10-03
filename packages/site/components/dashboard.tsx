"use client";
import { useMetamask } from "@/context/metamask";
import { shortenHash } from "@/lib/utils";
import {
  Encoding,
  Tag,
  encode,
  isAddressValid,
  verifyMessage,
} from "@aeternity/aepp-sdk";
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Snippet,
  Tab,
  Tabs,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import debounce from "lodash/debounce";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { BsPenFill } from "react-icons/bs";
import { FaSignature } from "react-icons/fa";

import { BsEnvelopeCheckFill } from "react-icons/bs";

import { TxParamsAsync } from "@aeternity/aepp-sdk/es/tx/builder/schema";
import base64js from "base64-js";
import Link from "next/link";

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const CustomToastWithLink = (url: string, description: string) => (
  <div>
    <Link href={url}>{description}</Link>
  </div>
);

const Dashboard = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const {
    address,
    signMessage,
    signAndSendTransaction,
    currentOperationalNetwork,
  } = useMetamask();

  const [isValidWalletId, setIsValidWalletId] = useState<boolean>(true);
  const [isValidVerifyAddress, setIsValidVerifyAddress] =
    useState<boolean>(true);
  const [isVerifyingAddress, setIsVerifyingAddress] = useState(false);

  const [loading, setLoading] = useState(false);

  const [addressBalance, setAddressBalance] = useState(0);
  const [usdBalance, setUsdBalance] = useState<number>(0);
  const [activities, setActivities] = useState([]);

  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const [addressVerify, setAddressVerify] = useState<string>("");
  const [messageSignature, setMessageSignature] = useState<string>("");
  const [messageSignatureVerify, setMessageSignatureVerify] =
    useState<string>("");
  const [messageVerify, setMessageVerify] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const checkWallet = async (address: string) => {
    try {
      setIsVerifyingAddress(true);
      const response = await fetchWalletInfo(address);

      if (!response.ok) {
        setIsValidWalletId(false);
        throw new Error("Failed to fetch data");
      } else {
        setIsValidWalletId(true);
        setRecipient(address);
      }
    } catch (err) {
      setIsValidWalletId(false);
    } finally {
      setIsVerifyingAddress(false);
    }
  };

  const fetchWalletInfo = async (address: string) => {
    return await fetch(
      `https://${currentOperationalNetwork}.aeternity.io/v3/accounts/${address}?int-as-string=false`,
    );
  };

  const debounceHandleSearch = useCallback(debounce(checkWallet, 500), []);

  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const address = e.target.value;
    debounceHandleSearch(address);
  };

  const handelAddressVerifyChange = (address: string) => {
    if (isAddressValid(address)) {
      setIsValidVerifyAddress(true);
    } else {
      setIsValidVerifyAddress(false);
    }
    setAddressVerify(address);
  };

  useEffect(() => {
    getBalance();
    getActivities();
  }, [currentOperationalNetwork]);

  const getBalance = async () => {
    const response = await fetch(
      `https://${currentOperationalNetwork}.aeternity.io/v3/accounts/${address}?int-as-string=false`,
    );

    const { balance } = await response.json();

    const humanReadableBalance = balance / 10 ** 18;
    setAddressBalance(humanReadableBalance ? humanReadableBalance : 0);

    const coingeckoResponse = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=aeternity&vs_currencies=usd",
    );

    const { aeternity } = await coingeckoResponse.json();
    const usdBalance = humanReadableBalance * aeternity.usd;

    setUsdBalance(usdBalance ? usdBalance : 0);
  };

  const getFromFaucet = async () => {
    const response = await fetch(
      `https://faucet.aepps.com/account/${address}`,
      {
        method: "POST",
      },
    );

    const data = await response.json();

    if (data.message) {
      toast.error(data.message);
    } else if (data.tx_hash) {
      toast.success(`You received 5 AE`);
    }

    setTimeout(() => {
      getBalance();
      getActivities();
    }, 2000);
  };

  const getActivities = async () => {
    const response = await fetch(
      `https://${currentOperationalNetwork}.aeternity.io/mdw/v2/accounts/${address}/activities`,
    );

    const { data } = await response.json();

    const actions = data.map((item: any) => {
      const hash = item.payload.hash;
      const { amount, fee, recipient_id, sender_id, type } = item.payload.tx;

      const action = {
        hash,
        amount: amount / 10 ** 18,
        fee: fee / 10 ** 18,
        recipient: recipient_id,
        sender: sender_id,
        type,
      };

      return action;
    });

    setActivities(actions);
  };

  const onSend = async () => {
    if (!recipient || recipient === "") {
      toast.error("Recipient is required");
      setIsValidWalletId(false);
      return;
    }

    if (!amount || amount === "") {
      toast.error("Amount is required");
      return;
    }

    const amountNum = parseFloat(amount);

    if (Number.isNaN(amountNum)) {
      toast.error("Amount must be a number");
      return;
    }

    if (amountNum <= 0) {
      toast.error("Amount must be greater than 0");
      return;
    }

    if (amountNum > addressBalance) {
      toast.error("Amount must be less than your balance");
      return;
    }

    try {
      const txHash = await signAndSendTransaction({
        tag: Tag.SpendTx,
        senderId: address,
        recipientId: recipient,
        amount: amountNum * 10 ** 18,
        payload: encode(new TextEncoder().encode(""), Encoding.Bytearray),
      } as TxParamsAsync);

      toast.success(
        CustomToastWithLink(
          currentOperationalNetwork === "testnet"
            ? `https://${currentOperationalNetwork}.aescan.io/transactions/${txHash}`
            : `https://aescan.io/transactions/${txHash}`,
          "Transaction has been sent successfully",
        ),
      );
    } catch {
      toast.error("Transaction was not executed.");
    }

    onClose();

    setTimeout(() => {
      getBalance();
      getActivities();
    }, 2000);
  };

  const handleSignMessage = async () => {
    const encodedMsg = btoa(message);
    try {
      const { signature } = await signMessage(encodedMsg);
      setMessageSignature(signature);
      toast.success(`The message has been signed: ${signature}`);
    } catch {
      toast.error("Transaction was not executed.");
    }
  };

  const handleVerifyMessage = async () => {
    try {
      setLoading(true);
      const encodedMsg = btoa(messageVerify);
      const messageBytes = base64js.toByteArray(encodedMsg);
      let decodedMessage = "";
      try {
        decodedMessage = new TextDecoder().decode(messageBytes);
      } catch (error) {
        decodedMessage = "Unable to decode message";
      }
      const signed = base64js.toByteArray(messageSignatureVerify);
      const verifiedMessage = verifyMessage(
        decodedMessage,
        signed,
        addressVerify as any,
      );

      if (verifiedMessage) {
        toast.success(`The message has successfully been verified`);
      } else {
        toast.error("Verification failed");
      }
    } catch (error) {
      toast.error("Verification failed");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-3 min-h-[100%]">
      <div className="col-span-3 md:col-span-1 h-auto">
        <Card className="flex">
          <CardBody className="">
            <div className="flex my-auto justify-between">
              <div className="">
                <p className="font-bold mb-4 text-lg">Balance</p>
                <div className="flex items-center">
                  <p>{addressBalance}</p>
                  <Image
                    src="images/aeternity-logo-icon.png"
                    alt=""
                    className="ml-2"
                    width={20}
                  />
                </div>
                <p>{USDollar.format(usdBalance)}</p>
              </div>
              <div className="flex mt-12 gap-2">
                {currentOperationalNetwork === "testnet" ? (
                  <Button
                    size="sm"
                    variant="bordered"
                    className="bg-white-100 font-bold"
                    onPress={getFromFaucet}
                  >
                    Get from faucet
                  </Button>
                ) : null}
                <Button size="sm" className="font-bold" onPress={onOpen}>
                  Send
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-3 md:col-span-2 row-span-6">
        <Card className="h-[100%]">
          <Tabs aria-label="Options" className="m-5">
            <Tab key="home" title="Home">
              <div className="m-5 mx-auto mt-[20%]">
                <div className="flex flex-col items-center justify-center h-full align-middle gap-6 drop-shadow-md p-10 text-center">
                  <div className="flex justify-center items-center">
                    <Image
                      src="images/aeternity-logo-icon.png"
                      alt="aeternity logo"
                      width={80}
                    />
                    <Image
                      src="images/icon-x.png"
                      alt="x logo"
                      width={30}
                      className="ml-6"
                    />
                    <Image
                      src="images/metamask-icon.png"
                      alt="metamask logo"
                      width={80}
                      className="ml-10"
                    />
                  </div>
                  <h1 className="mt-5 mb-5 text-2xl font-bold">
                    Welcome to Aeternity Wallet Explorer,
                    <br /> powered by MetaMask
                  </h1>
                  <p className="text-sm">
                    This explorer will allow you to connect with Aeternity dApps
                    and view and manage tokens via the MetaMask Wallet. Note,
                    this account won&rsquo;t be visible in your MetaMask browser
                    extension.
                  </p>
                </div>
              </div>
            </Tab>
            <Tab key="signMessage" title="Sign Message">
              <div className="m-5 mx-auto mt-[20%]">
                <div className="items-center gap-6 drop-shadow-md p-10 text-center my-auto">
                  <div className="flex justify-center items-center">
                    <FaSignature size="10%" />
                    <BsPenFill size="12%" className="ml-3 mb-10" />
                  </div>
                  <h1 className="mt-5 mb-5 text-2xl font-bold">
                    Sign the message
                  </h1>
                  <p className="text-sm">
                    The process of signing involves creating a digital signature
                    using the sender&lsquo;s private key and the original
                    message. This signature proves that the sender is the owner
                    of the private key and therefore the associated public key
                    and blockchain address.
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <Textarea
                    label="Message"
                    isRequired
                    placeholder="Enter message"
                    className="max-w-xs"
                    value={message ?? ""}
                    onValueChange={setMessage}
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <Button
                    size="sm"
                    className="font-bold"
                    onPress={async () => {
                      handleSignMessage();
                    }}
                  >
                    Sign
                  </Button>
                </div>
                <div className="flex justify-center mt-4">
                  {messageSignature ? (
                    <Snippet size="sm" symbol="" disableTooltip>
                      {messageSignature}
                    </Snippet>
                  ) : null}
                </div>
              </div>
            </Tab>
            <Tab key="verifyMessage" title="Verify Message">
              <div className="m-5 mx-auto mt-[20%]">
                <div className="items-center gap-6 drop-shadow-md p-10 text-center my-auto">
                  <div className="flex justify-center items-center">
                    <BsEnvelopeCheckFill size="15%" />
                  </div>
                  <h1 className="mt-5 mb-5 text-2xl font-bold">
                    Verify the message
                  </h1>
                  <p className="text-sm">
                    When the message is received, other network participants can
                    verify the authenticity of the message. They do this by
                    using the sender&lsquo;s public key to check the digital
                    signature. If the signature is valid, it confirms that the
                    message was indeed signed by the owner of the corresponding
                    private key and that the message has not been altered since
                    it was signed.
                  </p>
                </div>
                <div className="flex justify-center items-center mb-4 ">
                  <Input
                    className="mt-4"
                    type="text"
                    label="Aeternity Address"
                    placeholder="Enter aeternity address"
                    labelPlacement="outside"
                    isInvalid={isValidVerifyAddress ? false : true}
                    errorMessage={
                      isValidVerifyAddress
                        ? null
                        : "Please enter a valid wallet address"
                    }
                    onValueChange={handelAddressVerifyChange}
                  />
                </div>
                <div className="flex justify-center items-center mb-4">
                  <Input
                    className="mt-4"
                    type="text"
                    label="Message"
                    placeholder="Message"
                    labelPlacement="outside"
                    value={messageVerify ?? ""}
                    onValueChange={setMessageVerify}
                  />
                </div>
                <div className="flex justify-center items-center mb-4">
                  <Input
                    className="mt-5"
                    type="text"
                    label="Signature hash"
                    placeholder="Hash"
                    labelPlacement="outside"
                    value={messageSignatureVerify ?? ""}
                    onValueChange={setMessageSignatureVerify}
                  />
                </div>
                <div className="flex justify-center mt-4">
                  <Button
                    size="sm"
                    className="font-bold"
                    isDisabled={
                      !messageVerify ||
                      !messageSignatureVerify ||
                      !addressVerify ||
                      !isValidVerifyAddress
                    }
                    onPress={async () => {
                      handleVerifyMessage();
                    }}
                  >
                    Verify
                  </Button>
                </div>
              </div>
            </Tab>
          </Tabs>
        </Card>
      </div>
      <div className="col-span-3 md:col-span-1 h-auto">
        <Card>
          <CardBody>
            <p className="text-sm text-center">
              This explorer will allow you to connect with Aeternity dApps and
              send/receive tokens via the MetaMask Wallet. Note, this account
              won&rsquo;t be visible in your MetaMask browser extension.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="row-span-4 col-span-3 md:col-span-1 h-unit-9xl">
        <Card className="h-[100%]">
          <CardBody>
            <div className="flex">
              <p className="font-bold text-lg">
                Activities ({activities.length})
              </p>
              <a
                href={
                  currentOperationalNetwork === "testnet"
                    ? `https://testnet.aescan.io/accounts/${address}`
                    : `https://aescan.io/accounts/${address}`
                }
                target="_blank"
                className="ml-auto text-red-400"
              >
                View in explorer
              </a>
            </div>
            <div className="relative overflow-x-auto w-[100%] h-[60vh] mt-2">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Hash
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((item: any, index) => (
                    <tr
                      key={item.hash}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <a
                          href={
                            currentOperationalNetwork === "testnet"
                              ? `https://${currentOperationalNetwork}.aescan.io/transactions/${item.hash}`
                              : `https://aescan.io/transactions/${item.hash}`
                          }
                          target="_blank"
                          className="text-red-400"
                        >
                          {shortenHash(item.hash)}
                        </a>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item.type}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {item.amount}
                          <Image
                            src="/images/aeternity-logo-icon.png"
                            alt="aeternity"
                            className="ml-1"
                            width={20}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Send Tokens</ModalHeader>
              <ModalBody className="flex flex-col gap-5">
                <Input
                  className="mt-4"
                  type="text"
                  label="Aeternity Address"
                  placeholder="Enter aeternity address"
                  labelPlacement="outside"
                  isInvalid={isValidWalletId ? false : true}
                  errorMessage={
                    isValidWalletId
                      ? null
                      : "Please enter a valid wallet address"
                  }
                  onChange={(e) => {
                    handelInputChange(e);
                  }}
                />
                <Input
                  className="mt-4"
                  type="number"
                  label="Amount"
                  placeholder="0.00"
                  labelPlacement="outside"
                  startContent={
                    <div className="pointer-events-none flex items-center pr-1">
                      <Image
                        src="images/aeternity-logo-icon.png"
                        alt=""
                        width={20}
                      />
                    </div>
                  }
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Button
                  color="success"
                  variant="flat"
                  onPress={onSend}
                  isDisabled={!isValidWalletId}
                  isLoading={isVerifyingAddress}
                >
                  Send
                </Button>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose();
                    setIsValidWalletId(true);
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Dashboard;
