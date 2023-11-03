"use client";

import { SwitchProps } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { FC } from "react";

import { Button } from "@nextui-org/button";
import { Moon, Sun } from "@phosphor-icons/react";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  // const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div>
      {
        <Button
          isIconOnly
          variant="light"
          aria-label="Light mode"
          onPress={onChange}
        >
          {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
        </Button>
      }
    </div>
  );
};
