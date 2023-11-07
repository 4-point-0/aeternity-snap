"use client";

import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Popover,
  PopoverTrigger,
  Snippet,
  Card,
  PopoverContent,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { ThemeSwitch } from "./theme-switch";
import { useMetamask } from "@/context/metamask";

import { shortenAddress } from "@/lib/utils";
import { SignOut } from "@phosphor-icons/react";
import { ImQrcode } from "react-icons/im";
import { MdKeyboardArrowDown } from "react-icons/md";
import QRCode from "react-qr-code";
import { useMemo, useState } from "react";

export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { address, disconnectAccount } = useMetamask();

  const { theme } = useTheme();
  const { changeOperationalNetwork } = useMetamask();

  const [selectedKeys, setSelectedKeys] = useState<any>(new Set(["Testnet"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  useEffect(() => {
    console.log("isMenuOpet", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
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
                    <QRCode
                      size={256}
                      style={{
                        height: "auto",
                        maxWidth: "100%",
                        width: "100%",
                      }}
                      value={address ?? ""}
                      viewBox={`0 0 256 256`}
                    />
                  </Card>
                )}
              </PopoverContent>
            </Popover>
          )}

          {address && (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="solid"
                  className="capitalize"
                  onClick={changeOperationalNetwork(
                    selectedValue.toLowerCase(),
                  )}
                >
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
        <NavbarContent justify="end">
          <NavbarMenuItem className="sm:flex gap-2">
            {address && (
              <Snippet size="sm" symbol="" codeString={address} disableTooltip>
                {shortenAddress(address ?? "")}
              </Snippet>
            )}
          </NavbarMenuItem>

          <NavbarMenuItem className="sm:flex gap-2">
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
                      <QRCode
                        size={256}
                        style={{
                          height: "auto",
                          maxWidth: "100%",
                          width: "100%",
                        }}
                        value={address ?? ""}
                        viewBox={`0 0 256 256`}
                      />
                    </Card>
                  )}
                </PopoverContent>
              </Popover>
            )}
          </NavbarMenuItem>

          <NavbarMenuItem className="sm:flex gap-2">
            {address && (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="solid"
                    className="capitalize"
                    onClick={changeOperationalNetwork(
                      selectedValue.toLowerCase(),
                    )}
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

          <NavbarMenuItem className="sm:flex gap-2">
            {address && (
              <Button
                color="danger"
                startContent={<SignOut />}
                onPress={disconnectAccount}
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
