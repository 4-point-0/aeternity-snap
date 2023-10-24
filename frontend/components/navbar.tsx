"use client";
import { ThemeSwitch } from "@/components/theme-switch";
import { useMetamask } from "@/context/metamask";
import { shortenAddress } from "@/lib/utils";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import {
  Button,
  Card,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Snippet,
} from "@nextui-org/react";
import { SignOut } from "@phosphor-icons/react";
import NextLink from "next/link";
import { ImQrcode } from "react-icons/im";
import QRCode from "react-qr-code";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { address, disconnectAccount } = useMetamask();
  const { theme } = useTheme();

  console.log(theme);

  return (
    <NextUINavbar maxWidth="xl" position="static" className="md:rounded-lg">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              width={150}
              src={
                theme === "dark"
                  ? "/images/aeternity-logo-light.png"
                  : "/images/aeternity-logo-dark.png"
              }
              alt="aeternity"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="sm:flex gap-2">
          {address && (
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
    </NextUINavbar>
  );
};
