import { FC, useEffect, useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

type PhantomEvent = "disconnect" | "connect" | "accountChanged";

interface ConnectOpts {
  onlyIfTrusted: boolean;
}

interface PhantomProvider {
  connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  on: (event: PhantomEvent, callback: (args: any) => void) => void;
  isPhantom: boolean;
}

type WindowWithSolana = Window & {
  solana?: PhantomProvider;
};

const ConnectWallet = () => {
  const [walletAvail, setWalletAvail] = useState(false);
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [connected, setConnected] = useState(false);
  const [pubKey, setPubKey] = useState<PublicKey | null>(null);
  const [solWindow, setSolWindow] = useState(null);
  useEffect(() => {
      if(typeof window !== undefined){
        setSolWindow(window as WindowWithSolana)
        if ("solana" in window) {
            // const solWindow = window as WindowWithSolana;
            if (solWindow?.solana?.isPhantom) {
              setProvider(solWindow.solana);
              setWalletAvail(true);
              // Attemp an eager connection
              solWindow.solana.connect({ onlyIfTrusted: true });
            }
          }
      }
    // const solWindow = window as WindowWithSolana;
    
  }, [walletAvail ,typeof window]);

  useEffect(() => {
    provider?.on("connect", (publicKey: PublicKey) => {
      console.log(`connect event: ${publicKey}`);
      setConnected(true);
      setPubKey(publicKey);
    });
    provider?.on("disconnect", () => {
      console.log("disconnect event");
      setConnected(false);
      setPubKey(null);
    });
    provider?.connect().catch((err) => {
      console.error("connect ERROR:", err);
    });
  }, [provider]);

  
  const connectHandler: React.MouseEventHandler<HTMLButtonElement> = async (
    event
  ) => {
    await setProvider(solWindow.solana);
    console.log(`connect handler`);
    console.log(provider);
    if (provider) {
      provider?.connect().catch((err) => {
        console.error("connect ERROR:", err);
      });
    }
  };

  const disconnectHandler: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    console.log("disconnect handler");
    provider?.disconnect().catch((err) => {
      console.error("disconnect ERROR:", err);
    });
  };

  return (
    <div className="sc-btn-top mg-r-12" id="site-header">
      {/* {walletAvail ? (
        <>
          {!connected ? (
            <button
              disabled={connected}
              onClick={connectHandler}
              className="sc-button header-slider style style-1 wallet fl-button pri-1"
            >
              <span>Connect Wallet</span>
            </button>
          ) : (
            <button
              onClick={disconnectHandler}
              className="sc-button header-slider style style-1 wallet fl-button pri-1"
            >
              <span>Disconnect</span>
            </button>
          )}
          { connected ? <p>Your public key is : {pubKey?.toBase58()}</p> : null }
        </>
      ) : (
        <>
          <p>No Wallet found</p>
        </>
      )} */}
      <div className="d-flex align-items-center">
        {!connected ? (
          <button
            disabled={connected}
            onClick={connectHandler}
            className="sc-button header-slider style style-1 wallet fl-button pri-1"
          >
            <span>Connect Wallet</span>
          </button>
        ) : (
          <button
            onClick={disconnectHandler}
            className="sc-button header-slider style style-1 wallet fl-button pri-1"
          >
            <span>Disconnect</span>
          </button>
        )}
        <div>
          {connected ? (
            <p>{pubKey?.toBase58().substring(0, 10) + "..."}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
