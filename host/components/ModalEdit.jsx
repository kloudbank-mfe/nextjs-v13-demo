import React, { useCallback } from "react";
import { Input, Modal, Form } from "antd";

const CustomModal = ({ visible, edit, setEdit, setData, onResetEditing }) => {
  const handleInputChange = useCallback((key, value) => {
    setEdit((pre) => {
      return { ...pre, [key]: value };
    });
  }, [setEdit]);
  
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
        <Form>
          {
            edit ? Object.entries(edit).map(([key, value], idx) => {
              if (key !== 'key' && key !== 'personal') {
                return (
                  <Form.Item key={`item-${key}-${value}-${idx}`}
                    label={key.toUpperCase()}
                  >
                    <Input key={`in-${key}-${value}-${idx}`}
                      value={value}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      // onChange={(e) => {
                      //   setEdit((pre) => {
                      //     return { ...pre, [key]: e.target.value };
                      //   });
                      // }}
                    />
                  </Form.Item>
                )
              }
              return null;
            }) : null
          }
        </Form>
        {/* <Form>
          <Form.Item
            label="Name"
          >
            <Input
              value={edit?.name}
              onChange={(e) => {
                setEdit((pre) => {
                  return { ...pre, name: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Name"
          >
            <Input
              value={edit?.company}
              onChange={(e) => {
                setEdit((pre) => {
                  return { ...pre, company: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Name"
          >
            <Input
              value={edit?.email}
              onChange={(e) => {
                setEdit((pre) => {
                  return { ...pre, email: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Name"
          >
            <Input
              value={edit?.enterDate}
              onChange={(e) => {
                setEdit((pre) => {
                  return { ...pre, enterDate: e.target.value };
                });
              }}
            />
          </Form.Item>
          <Form.Item
            label="Name"
          >
            <Input
              value={edit?.enable}
              onChange={(e) => {
                setEdit((pre) => {
                  return { ...pre, enable: e.target.value };
                });
              }}
            />
          </Form.Item>
        </Form> */}
      </Modal>
    </>
  );
};

export default CustomModal;
