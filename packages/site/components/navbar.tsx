"use client";

import { useMetamask } from "@/context/metamask";
import {
  Button,
  Card,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Snippet,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import { ThemeSwitch } from "./theme-switch";

import { shortenAddress } from "@/lib/utils";
import { SignOut } from "@phosphor-icons/react";
import { QRCodeCanvas } from "qrcode.react";
import { useMemo, useState } from "react";
import { ImQrcode } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { address, disconnectAccount } = useMetamask();

  const { theme } = useTheme();
  const { changeOperationalNetwork } = useMetamask();

  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(["testnet"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  useEffect(() => {
    changeOperationalNetwork(selectedValue.toLowerCase());
  }, [selectedValue]);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        {address && (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        )}
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img
            width={150}
            src={
              theme === "dark"
                ? "/images/aeternity-logo-light.png"
                : "/images/aeternity-logo-dark.png"
            }
            alt="aeternity"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img
            width={150}
            src={
              theme === "dark"
                ? "/images/aeternity-logo-light.png"
                : "/images/aeternity-logo-dark.png"
            }
            alt="aeternity"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem className="sm:flex gap-2">
          {address && !isMenuOpen && (
            <Snippet size="sm" symbol="" codeString={address} disableTooltip>
              {shortenAddress(address ?? "")}
            </Snippet>
          )}

          {address && (
            <Popover placement="bottom" showArrow offset={10}>
              <PopoverTrigger>
                <Button isIconOnly>
                  <ImQrcode />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[240px] p-0">
                {(titleProps) => (
                  <Card className="p-4 bg-white">
                    <QRCodeCanvas
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={address ?? ""}
                    />
                  </Card>
                )}
              </PopoverContent>
            </Popover>
          )}

          {address && (
            <Dropdown>
              <DropdownTrigger>
                <Button variant="solid" className="capitalize">
                  {selectedValue} <MdKeyboardArrowDown />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                <DropdownItem key="Mainnet">Mainnet</DropdownItem>
                <DropdownItem key="Testnet">Testnet</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          )}

          {address && (
            <Button
              color="danger"
              startContent={<SignOut />}
              onPress={disconnectAccount}
            >
              Disconnect
            </Button>
          )}

          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarContent justify="end" className="inline-block">
          <div className="flex mb-5">
            <NavbarMenuItem className="sm:flex gap-2">
              {address && (
                <Snippet
                  size="sm"
                  symbol=""
                  codeString={address}
                  disableTooltip
                >
                  {shortenAddress(address ?? "")}
                </Snippet>
              )}
            </NavbarMenuItem>

            <NavbarMenuItem className="sm:flex gap-2 ml-2">
              {address && (
                <Popover placement="bottom" showArrow offset={10}>
                  <PopoverTrigger>
                    <Button isIconOnly>
                      <ImQrcode />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[240px] p-0 mt-2">
                    {(titleProps) => (
                      <Card className="p-4 bg-white">
                        <QRCodeCanvas
                          size={256}
                          style={{
                            height: "auto",
                            maxWidth: "100%",
                            width: "100%",
                          }}
                          value={address ?? ""}
                        />
                      </Card>
                    )}
                  </PopoverContent>
                </Popover>
              )}
            </NavbarMenuItem>

            <NavbarMenuItem className="sm:flex gap-2 ml-2">
              {address && (
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="solid"
                      className="capitalize"
                      onClick={() =>
                        changeOperationalNetwork(selectedValue.toLowerCase())
                      }
                    >
                      {selectedValue} <MdKeyboardArrowDown />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                  >
                    <DropdownItem key="Mainnet">Mainnet</DropdownItem>
                    <DropdownItem key="Testnet">Testnet</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              )}
            </NavbarMenuItem>
          </div>

          <NavbarMenuItem className="sm:flex gap-2 mt-2">
            {address && (
              <Button
                color="danger"
                startContent={<SignOut />}
                onPress={() => {
                  disconnectAccount();
                  setIsMenuOpen(false);
                }}
              >
                Disconnect
              </Button>
            )}
          </NavbarMenuItem>
        </NavbarContent>
        ,
      </NavbarMenu>
    </Navbar>
  );
};
