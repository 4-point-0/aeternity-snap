"use client";
import { useMetamask } from "@/context/metamask";
import { Button, Card, Image } from "@nextui-org/react";

const Welcome = () => {
  const { connectAccount } = useMetamask();

  return (
    <div className="">
      <div className="mt-[10%] flex items-center justify-center">
        <div className="w-2/5">
          <Card className="mt-7 items-center gap-6 drop-shadow-md p-10">
            <div className="text-center">
              <div className="flex justify-between items-center">
                <Image width={80} src="images/aeternity-logo-icon.png" alt="" />
                <Image width={30} src="images/icon-x.png" alt="" />
                <Image width={80} src="images/metamask-icon.png" alt="" />
              </div>
              <h1 className="mt-5 mb-5 text-2xl font-bold">
                Aeternity Wallet Explorer, <br />
                powered by MetaMask
              </h1>
              <p>
                Connect your MetaMask to access the <br />
                Aeternity Wallet Explorer
              </p>
            </div>
            <Button
              color="primary"
              variant="faded"
              onClick={connectAccount}
              startContent={
                <Image width={30} alt="" src="images/metamask-icon.png" />
              }
            >
              <p className="text-red-400">Connect with MetaMask</p>
            </Button>
          </Card>
        </div>
      </div>
      <div className="flex justify-center mt-[3%] space-x-10 sm:space-x-5">
        <a href="" className="text-sm text-gray-500">
          GitHub
        </a>
        <div className="border-l-small"></div>
        <a href="" className="text-sm text-gray-500">
          Privacy Policy
        </a>
        <div className="border-l-small"></div>
        <a href="" className="text-sm text-gray-500">
          Terms of service
        </a>
        <div className="border-l-small"></div>
        <a href="" className="text-sm text-gray-500">
          FAQ&rsquo;s
        </a>
      </div>
      <div className="mt-[3%] flex justify-center">
        <p className="text-center text-sm text-gray-500">Powered by</p>
        <span className="mr-1"></span>
        <a
          href="https://metamask.io/snaps/"
          className="text-center text-sm underline text-gray-500"
        >
          MetaMask Snaps
        </a>
      </div>
    </div>
  );
};

export default Welcome;
