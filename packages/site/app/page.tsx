"use client";
import Dashboard from "@/components/dashboard";
import Welcome from "@/components/welcome";
import { useMetamask } from "@/context/metamask";
import { useTheme } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { address } = useMetamask();
  const { theme } = useTheme();

  return (
    <>
      {address ? <Dashboard /> : <Welcome />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme={theme === "dark" ? "dark" : "light"}
      />
    </>
  );
}
