import React, { useEffect, useRef, useState } from "react";
import "./ConfirmPaymentStyle.css";
import SenderInformation from "../../components/SenderInformation/SenderInformation";
const ConfirmPayment = () => {
  const [senderInfo, setSenderInfo] = useState({
    companyName: "",
    senderName: "",
    paymentMethod: "",
    amountPaid: "",
    senderAdress: "",
    senderId: "",
    receiptNumber: "",
    contactNumber: "",
  });
  const chiledRef = useRef();
  return (
    <div className="ms-main">
      <p className="ms-title">Confirm Payment</p>
      <p className="ms-des">
        Please pay the required amount of 25,000 SYP for posting a job
        advertisement, and then attach the payment receipt number to confirm the
        process.
      </p>
      <SenderInformation
        senderInfo={senderInfo}
        setSenderInfo={setSenderInfo}
        ref={chiledRef}
      />
      <div className="ms-buttuns">
        <div className="ms-cancel-btn">Cancel</div>
        <div
          className="ms-confirm-btn"
          onClick={() => {
            let isAllFill = true;

            for (const key of Object.keys(senderInfo)) {
              if (senderInfo[key] == "") {
                isAllFill = false;
                if (key == "companyName") {
                  chiledRef.current.changeError();
                } else if (key == "senderName") {
                  chiledRef.current.changeError1();
                } else if (key == "paymentMethod") {
                  chiledRef.current.changeError2();
                } else if (key == "amountPaid") {
                  chiledRef.current.changeError3();
                } else if (key == "senderAdress") {
                  chiledRef.current.changeError4();
                } else if (key == "senderId") {
                  chiledRef.current.changeError5();
                } else if (key == "receiptNumber") {
                  chiledRef.current.changeError6();
                } else if (key == "contactNumber") {
                  chiledRef.current.changeError7();
                }
              }
            }
            if (isAllFill) {
              console.log(JSON.stringify(senderInfo));
            } else {
            }
          }}
        >
          Confirm Payment
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
