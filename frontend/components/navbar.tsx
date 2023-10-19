"use client";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { ImQrcode } from "react-icons/im";
import { FiCopy } from "react-icons/fi";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input,
} from "@nextui-org/react";

export const Navbar = () => {
  const id = "tz1MtcMi131fT4aFsn53DgJcwWosLmxGPWJM";
  return (
    <NextUINavbar maxWidth="xl" position="static" className="md:rounded-lg">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            {/* <p className="font-bold text-inherit">Aeternity</p> */}
            <img
              className="w-[20%] object-scale-down"
              src="/images/aeternity-logo-dark.png"
              alt="aeternity"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="sm:flex gap-2">
          <Button size="sm" className="w-[40%]">
            <img
              src="images/metamask-icon.png"
              alt="metamask"
              className="scale-object-fit w-[12%]"
            />
            {`${id.substring(0, 10)}...`}
            <FiCopy />
          </Button>
          <Popover placement="bottom" showArrow offset={10}>
            <PopoverTrigger>
              <Button size="sm">
                <ImQrcode />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[240px]">
              {(titleProps) => (
                <div className="px-1 py-2 w-full">
                  <p
                    className="text-small font-bold text-foreground"
                    {...titleProps}
                  >
                    Your QR code
                  </p>
                  <div className="mt-2 flex flex-col gap-2 w-full">
                    <img src="/images/qr-code.png" alt="" />
                  </div>
                </div>
              )}
            </PopoverContent>
          </Popover>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
