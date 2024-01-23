const questions = [
  {
    question: "Why do I need to use a snap for Æternity?",
    answer:
      "A snap is a program that expands the capabilities of MetaMask, particularly for non-EVM blockchains, e.g., Æternity blockchain. This allows the user to use their MetaMask wallet to interact with Æternity dApps, specifically for signing payloads and operations. The MetaMask wallet does so by deriving an Æternity compatible address based on your MetaMask Secret Recovery Phrase (SRP).",
  },
  {
    question: "How do I see my AE and token balances?",
    answer:
      "A snap on MetaMask does not natively allow you to view and manage your assets inside the wallet; it only allows you to sign payload messages and operations. There exists an Æternity Wallet web application here that connects to the MetaMask wallet and allows you to view and take actions. The web application can also connect with the dApp and act as an intermediary offering a seamless user experience.",
  },
  {
    question:
      "I have MetaMask installed, why can’t I install the Æternity snap?",
    answer:
      "This might be because you are not on the latest version of MetaMask. This is a new addition to MetaMask.",
  },
  {
    question: "Is the Æternity Snap available on MetaMask Mobile?",
    answer:
      "At the moment, Snaps are currently not available on MetaMask Mobile but require a desktop with the MetaMask Chrome extension installed.",
  },
  {
    question: "What happens if I delete the snap in MetaMask?",
    answer:
      "Reinstalling the snap will automatically recover your account. Do note, deleting the snap does not affect your account or any on-chain data associated with it.",
  },
  {
    question: "How do I recover my account?",
    answer:
      "The Æternity snap recovery is directly leveraging MetaMask’s Secret Recovery Phrase. As long as the same recovery phrase is used, the account would be restored.",
  },
  {
    question: "How do I contact support regarding the snap implementation?",
    answer:
      "You can email them at support@aeternity.foundation. Any and all feedback is appreciated.",
  },
];

export default questions;
