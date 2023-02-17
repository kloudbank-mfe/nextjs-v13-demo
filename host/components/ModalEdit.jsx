import React from "react";
import { Input, Modal } from "antd";

const CustomModal = ({ visible, edit, setEdit, setData, onResetEditing }) => {
  return (
    <>
      <Modal
        title="Edit Detail"
        open={visible}
        okText="Save"
        onCancel={() => onResetEditing()}
        onOk={() => {
          setData((pre) => {
            return pre.map((obj) => {
              if (obj.personal === edit.personal) {
                return edit;
              } else {
                return obj;
              }
            });
          });
          onResetEditing();
        }}
      >
        <Input
          value={edit?.name}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.company}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, company: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.email}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.enterDate}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, enterDate: e.target.value };
            });
          }}
        />
        <Input
          value={edit?.enable}
          onChange={(e) => {
            setEdit((pre) => {
              return { ...pre, enable: e.target.value };
            });
          }}
        />
      </Modal>
    </>
  );
};

export default CustomModal;
