"use client";
import { useMetamask } from "@/context/metamask";
import { shortenHash } from "@/lib/utils";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const data = [
  { date: "20.08.2023", amount: "25.234", price: "25" },
  { date: "25.08.2023", amount: "13.332", price: "23" },
  { date: "10.10.2023", amount: "16.234", price: "30" },
  { date: "20.10.2023", amount: "18.342", price: "35" },
];

let USDollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Dashboard = () => {
  const { address } = useMetamask();

  const [addressBalance, setAddressBalance] = useState(0);
  const [usdBalance, setUsdBalance] = useState(0);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getBalance();
    getActivities();
  }, []);

  const getBalance = async () => {
    const response = await fetch(
      `https://testnet.aeternity.io/v3/accounts/${address}?int-as-string=false`
    );

    const { balance } = await response.json();

    const humanReadableBalance = balance / 10 ** 18;
    setAddressBalance(humanReadableBalance);

    const coingeckoResponse = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=aeternity&vs_currencies=usd"
    );

    const { aeternity } = await coingeckoResponse.json();
    const usdBalance = humanReadableBalance * aeternity.usd;
    setUsdBalance(usdBalance);
  };

  const getFromFaucet = async () => {
    const response = await fetch(
      `https://faucet.aepps.com/account/${address}`,
      {
        method: "POST",
      }
    );

    const data = await response.json();

    if (data.message) {
      toast.error(data.message);
    } else if (data.tx_hash) {
      toast.success(`You received 5 AE`);
    }

    getBalance();
    getActivities();
  };

  const getActivities = async () => {
    const response = await fetch(
      `https://testnet.aeternity.io/mdw/v2/accounts/${address}/activities`
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

  return (
    <div className="grid grid-cols-3 gap-3 min-h-[100%]">
      <div className="h-auto">
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
                <Button
                  size="sm"
                  variant="bordered"
                  className="bg-white-100 font-bold"
                  onPress={getFromFaucet}
                >
                  Get from faucet
                </Button>
                <Button size="sm" className="font-bold">
                  Send
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-2 row-span-6">
        <Card className="h-[100%]">
          <CardBody className="mx-auto">
            <div className="items-center gap-6 drop-shadow-md p-10">
              <div className="text-center mt-56">
                <div className="flex justify-center items-center">
                  <Image
                    src="images/aeternity-logo-icon.png"
                    alt=""
                    width={80}
                  />
                  <Image
                    src="images/icon-x.png"
                    alt=""
                    width={30}
                    className="ml-6"
                  />
                  <Image
                    src="images/metamask-icon.png"
                    alt=""
                    width={80}
                    className="ml-6"
                  />
                </div>
                <h1 className="mt-5 mb-5 text-2xl font-bold">
                  Welcome to Aeternity Wallet Explorer,
                  <br /> powered by MetaMask
                </h1>
                <p className="text-sm">
                  This explorer will allow you to connect with Aeternity dApps
                  and view and manage tokens via the MetaMask Wallet. Note, this
                  account won&rsquo;t be visible in your MetaMask browser
                  extension.
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="h-auto">
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
      <div className="row-span-4 h-unit-9xl">
        <Card className="h-[100%]">
          <CardBody>
            <div className="flex">
              <p className="font-bold text-lg">
                Activites ({activities.length})
              </p>
              <a
                href={`https://testnet.aescan.io/accounts/${address}`}
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
                          href={`https://testnet.aescan.io/transactions/${item.hash}`}
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
    </div>
  );
};

export default Dashboard;
