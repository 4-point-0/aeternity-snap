"use client";
import React from "react";
import { Card, Button } from "@nextui-org/react";

export const Home = () => {
  return (
    <div className="">
      <div className="mt-[10%] flex items-center justify-center">
        <div className="w-2/5">
          <Card className="mt-7 items-center gap-6 drop-shadow-md p-10">
            <div className="text-center">
              <div className="flex justify-center space-x-5">
                <img
                  src="images/aeternity-logo-icon.png"
                  alt=""
                  className="w-[13%] object-scale-down"
                />
                <img
                  src="images/icon-x.png"
                  alt=""
                  className="object-scale-down w-[5%]"
                />
                <img
                  src="images/metamask-icon.png"
                  alt=""
                  className="w-[13%] object-scale-down"
                />
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
              className="w-[50%] sm:w-[80%] font-bold text-red-600"
              color="primary"
              variant="faded"
            >
              <img className="w-[8%]" src="images/metamask-icon.png" />
              Connect with MetaMask
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
          FAQ's
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

export default Home;
