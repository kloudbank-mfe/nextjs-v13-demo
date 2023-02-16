import { Badge, Descriptions, Drawer, Space } from 'antd';
import { useState } from 'react';

const CustomDescriptions = ({
  title, detail,
} = props) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const showDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <a type="primary" onClick={showDrawer}>
          {title}
        </a>
      </Space>
      <Drawer
        title={`Detail of ${title}`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
      >
        <Descriptions 
          title="User Info" 
          bordered 
          size="middle"
        >
          {
            Object.entries(detail).map(([key, value], idx) => {
              return (
                <Descriptions.Item 
                  key={`${key}=${idx}`}
                  label={key.toUpperCase()}
                  span={3}
                >
                  {value}
                </Descriptions.Item>
              )
            })
          }
        </Descriptions>
      </Drawer>
    </>
  );
};

export default CustomDescriptions;
