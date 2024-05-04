import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { defineChain } from "viem";

const devNetwork = defineChain({
  id: 17066,
  name: "InsureChain",
  network: "bbtestnet",
  nativeCurrency: {
    decimals: 18,
    name: "TOKEN",
    symbol: "TOKEN",
  },
  rpcUrls: {
    public: { http: [import.meta.env.VITE_RPC_DEV_URL as string] },
    default: { http: [import.meta.env.VITE_RPC_DEV_URL as string] },
  },
  blockExplorers: {
    etherscan: {
      name: "BBExplorer",
      url: import.meta.env.VITE_BLOCK_EXPLORERS_URL as string,
    },
    default: {
      name: "BBExplorer",
      url: import.meta.env.VITE_BLOCK_EXPLORERS_URL as string,
    },
  },
});

const queryClient = new QueryClient();

const projectId = import.meta.env.VITE_REACT_APP_PROJECT_ID as string;

const metadata = {
  name: "InsureChain Web3Modal",
  description: "Web3Modal for InsureChain",
  url: `https://${window.location.hostname}`, // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, devNetwork] as const;

const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableCoinbase: false,
  enableInjected: false,
  enableWalletConnect: false,
});

createWeb3Modal({
  defaultChain: mainnet,
  wagmiConfig: config,
  projectId,
  enableWalletFeatures: false,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  allWallets: "HIDE",
  themeVariables: {
    "--w3m-color-mix": "#1E2124",
    "--w3m-color-mix-strength": 40,
  },
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
