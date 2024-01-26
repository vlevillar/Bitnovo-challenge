import { Button } from "@/components/button";
import { QRCode } from "react-qrcode-logo";
import Image from "next/image";
import { MetamaskButton } from "@/components/metamaskLogin";
import { copyToClipboard } from "@/utils/copyToClipboard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { EthereumComponent } from "@/components/metamaskPay";

export const Payment = ({ orderInfo }) => {
  const router = useRouter();
  const [isConnected, setIsConnected] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
  const [remainingTime, setRemainingTime] = useState(15 * 60);
  const [selectedOption, setSelectedOption] = useState("smartQR");

  console.log(selectedOption);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          setTimerExpired(true);
          clearInterval(timer);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timerExpired) {
      router.push("/unsuccessful")
  }

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <p className="font-bold text-primary text-xl">Realiza el pago</p>
      <div className="flex flex-col p-8 justify-between gap-6 items-center bg-[#FFF] border border-solid border-[#F5F5F5] rounded-2xl shadow-[0px_0px_4.387px_-0px_rgba(0, 0, 0, 0.02),0px_0px_27px_-0px_rgba(0, 0, 0, 0.04)">
        <div className="flex">
          <Image src="/timer.svg" width={20} height={20} className="mr-2" />
          <p className="font-semibold text-primary text-sm">
            {Math.floor(remainingTime / 60)}:
            {remainingTime % 60 < 10 ? "0" : ""}
            {remainingTime % 60}
          </p>
        </div>
        <div className="flex gap-3 w-52">
          <Button
            text="Smart QR"
            isGroup
            onClick={() => handleOptionChange("smartQR")}
            customStyles={selectedOption === "smartQR" ? "bg-[#035AC5]" : "bg-[#647184]"}
          />
          <Button
            text="Web3"
            isGroup
            onClick={() => handleOptionChange("Web3")}
            customStyles={selectedOption === "Web3" ? "bg-[#035AC5]" : "bg-[#647184]"}
          />
        </div>
        <div>
          {selectedOption === "smartQR" ? (
            <QRCode size={150} value={orderInfo.address} />
          ) : selectedOption === "Web3" ? (
            <>
              <MetamaskButton onConnectStatusChange={setIsConnected}/>
              <EthereumComponent
                amountToSend={orderInfo.crypto_amount}
                receiver={orderInfo.address}
                isConnected={isConnected}
              />
            </>
          ) : null}
        </div>
        <div className="flex flex-col items-center content-center gap-3 text-center">
          <div className="flex">
            <p>
              Enviar{" "}
              <span className="font-bold">
                {orderInfo.crypto_amount} {orderInfo.currency_id}
              </span>
            </p>
            <Image
              src="/Copy.svg"
              width={20}
              height={20}
              className="ml-2 cursor-pointer"
              onClick={() => copyToClipboard(orderInfo.crypto_amount)}
            />
          </div>
          <div className="flex">
            <p className="break-all">{orderInfo.address}</p>
            <Image
              src="/Copy.svg"
              width={20}
              height={20}
              className="ml-2 cursor-pointer"
              onClick={() => copyToClipboard(orderInfo.address)}
            />
          </div>
          {orderInfo.tag_memo ? (
            <div className="flex">
              <Image src="/warning.svg" width={20} height={20} className="mr-2" />
              <p>Etiqueta de destino: {orderInfo.tag_memo}</p>
              <Image
                src="/Copy.svg"
                width={20}
                height={20}
                className="ml-2 cursor-pointer"
                onClick={() => copyToClipboard(orderInfo.tag_memo)}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
