import { parseEther } from 'ethers';
import { useEffect, useState } from 'react';
import { Button } from './button';

export const EthereumComponent = ({ amountToSend, receiver, isConnected }) => {
  const [accounts, setAccounts] = useState([]);
  const [valueInWei, setValueInWei] = useState(0);

  
  const handleEnableEthereum = async () => {
    if (window.ethereum) {
      try {
        const acc = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAccounts(acc);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSendEth = async () => {
    try {
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: accounts[0],
            to: receiver,
            value: valueInWei.toString(),
          },
        ],
      });

    } catch (error) {
      console.error('Error al enviar la transacción:', error);
    }
  };

  useEffect(() => {
    const convertToWei = (amount) => {
      const weiAmount = parseEther(amount.toString());
      setValueInWei(weiAmount);
    };

    convertToWei(amountToSend);

  }, [ amountToSend, valueInWei]);

  return (
    <>
      {isConnected ? (
        <div className="w-full flex justify-center items-center">
          <div className="flex gap-3 w-52">
            <Button text="Confirm" onClick={handleEnableEthereum} customStyles="bg-green-600"/>
            <Button text="Send ETH" onClick={handleSendEth} disabled={!accounts.length} customStyles={!accounts.length ? "bg-slate-700" : "bg-green-600"}/>
          </div>
        </div>
      ) : null}
    </>
  );
};
