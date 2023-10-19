"use client";
import { Card, CardBody, Button } from "@nextui-org/react";

const data = [
  { date: "20.08.2023", amount: "25.234", price: "25" },
  { date: "25.08.2023", amount: "13.332", price: "23" },
  { date: "10.10.2023", amount: "16.234", price: "30" },
  { date: "20.10.2023", amount: "18.342", price: "35" },
];

export const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-3 min-h-[100%]">
      <div className="h-auto">
        <Card className="flex">
          <CardBody className="">
            <div className="flex my-auto">
              <div className="">
                <p className="font-bold mb-4 text-lg">Balance</p>
                <div className="flex">
                  <p>0</p>
                  <img
                    src="images/aeternity-logo-icon.png"
                    alt=""
                    className="w-[10%] object-scale-down ml-2"
                  />
                </div>
                <p>0 $</p>
              </div>
              <div className="flex mt-12 gap-2">
                <Button
                  size="sm"
                  variant="bordered"
                  className="bg-white-100 font-bold"
                >
                  Buy
                </Button>
                <Button size="sm" className="bg-red-400 font-bold">
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
                <div className="flex justify-center space-x-5">
                  <img
                    src="images/aeternity-logo-icon.png"
                    alt=""
                    className="w-[8%] object-scale-down"
                  />
                  <img
                    src="images/icon-x.png"
                    alt=""
                    className="object-scale-down w-[3%]"
                  />
                  <img
                    src="images/metamask-icon.png"
                    alt=""
                    className="w-[8%] object-scale-down"
                  />
                </div>
                <h1 className="mt-5 mb-5 text-2xl font-bold">
                  Welcome to Aeternity Wallet Explorer,
                  <br /> powered by MetaMask
                </h1>
                <p className="text-sm">
                  This explorer will allow you to connect with Aeternity dApps
                  and view and manage tokens via the MetaMask Wallet. Note, this
                  account won't be visible in your MetaMask browser extension.
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
              won't be visible in your MetaMask browser extension.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="row-span-4 h-unit-9xl">
        <Card className="h-[100%]">
          <CardBody>
            <div className="flex">
              <p className="font-bold text-lg">Operations</p>
              <a href="" className="ml-36 text-red-400">
                View in explorer
              </a>
            </div>
            <div className="relative overflow-x-auto w-[100%] h-[60vh] mt-2">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.date}
                      </th>
                      <td className="px-6 py-4">
                        <div className="flex">
                          {item.amount}
                          <img
                            src="/images/aeternity-logo-icon.png"
                            alt="aeternity"
                            className="w-[18%] ml-1"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4">{item.price} $</td>
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
