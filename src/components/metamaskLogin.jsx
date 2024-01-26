import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { formatAddress } from "@/utils/utils";
import Image from "next/image";

export const ConnectWalletButton = ({ onConnectStatusChange }) => {
    const { sdk, connected, connecting, account } = useSDK();
    if (account !== undefined) {
      onConnectStatusChange(true);
  }else onConnectStatusChange(false)

    const connect = async () => {
      try {
        await sdk?.connect();
        onConnectStatusChange(true);
      } catch (err) {
        console.warn(`No accounts found`, err);
      }
    };
  
    const disconnect = () => {
      if (sdk) {
        sdk.terminate();
        onConnectStatusChange(false);
      }
    };
  
    return (
      <div className="relative">
        {connected ? (
          <div>
            <div>
              <button
                onClick={disconnect}
                className="w-[200px] h-[200px] rounded-xl border border-solid border-[#F05252] flex items-center justify-center cursor-pointer flex-col"
              >
                <Image src="/metamask.png" width={150} height={150}/>
                <p className="font-bold">Disconnect</p>
                <p>{formatAddress(account)}</p>
              </button>
            </div>
          </div>
        ) : (
          <div disabled={connecting} onClick={connect} className="w-[200px] h-[200px] border rounded-xl border-solid border-[#E5E9F2] flex items-center justify-center cursor-pointer flex-col">
            <Image src="/metamask.png" width={150} height={150}/>
          </div>
        )}
      </div>
    );
  };

  export const MetamaskButton = ({ onConnectStatusChange }) => {
    const host =
      typeof window !== "undefined" ? window.location.host : "defaultHost";
  
    const sdkOptions = {
      logging: { developerMode: false },
      checkInstallationImmediately: false,
      dappMetadata: {
        name: "Next-Metamask-Boilerplate",
        url: host,
      },
    };
  
    return (
        <div className="flex gap-4 px-6">
          <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
            <ConnectWalletButton onConnectStatusChange={onConnectStatusChange}/>
          </MetaMaskProvider>
        </div>
    );
  };