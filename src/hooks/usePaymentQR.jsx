import { useEffect, useState } from "react";

const usePaymentQR = (orderInfo) => {
  const [qrString, setQRString] = useState("Invalid QR string");

  useEffect(() => {
    if (
      !orderInfo ||
      !orderInfo.currency_id ||
      !orderInfo.address ||
      orderInfo.address === ""
    )
      return setQRString("Invalid QR string");

    let newString = orderInfo.currency_id + ":" + orderInfo.address;

    if (orderInfo.address.includes(":")) newString = orderInfo.address;

    if (orderInfo.crypto_amount) {
      newString += "?amount=" + orderInfo.crypto_amount;
      if (orderInfo.notes) newString += "&message=" + orderInfo.notes;
    } else if (orderInfo.notes) {
      newString += "?message=" + orderInfo.notes;
    }

    setQRString(newString);
  }, [orderInfo, setQRString]);

  const handleCopyToClipboard = (textToCopy) => {
    if (typeof document !== "undefined") {
      const tempElement = document.createElement("textarea");
      tempElement.value = textToCopy;
      document.body.appendChild(tempElement);

      tempElement.select();
      document.execCommand("copy");

      document.body.removeChild(tempElement);
    }
  };

  return {
    qrString,
    handleCopyToClipboard,
  };
};

export default usePaymentQR;
