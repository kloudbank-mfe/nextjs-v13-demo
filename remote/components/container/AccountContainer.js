import { useState } from "react";
import { Typography, Modal } from "antd";
import { getAccount } from "../../store/account.js";

const AccountContainer = ({ accountOpen, setAccountOpen }) => {
  const account = getAccount();
  if (typeof window != "undefined") {
    sessionStorage.setItem("session", JSON.stringify(account));
  }

  return (
    <Modal
      className="demo-account-modal"
      title={`${account.name} 님`}
      open={accountOpen}
      onOk={() => setAccountOpen(false)}
      onCancel={() => setAccountOpen(false)}
    >
      <Typography>
        <p>{account.accountInfo1}</p>
        <p>{account.accountInfo2}</p>
      </Typography>
    </Modal>
  );
};
export default AccountContainer;
