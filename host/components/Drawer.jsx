import { Drawer, Space } from 'antd';
import { useState } from 'react';

const CustomDrawer = ({
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
      {
        Object.entries(detail).map(([key, value], idx) => {
          if (key != '_id') {
            if (typeof value != 'object') {
              return (
                <span key={`${value}-${idx}`}>
                  <h2>{key}</h2>
                  <p>{value}</p>
                </span>
              );
            } else {
              return (
                <>
                  <h2>{key}</h2>
                  {Object.entries(value).map(([key1, value1], idx1) => {
                    return (
                      <span key={`${value1}=${idx1}`}>
                        <h3>{key1}</h3>
                        <p>{value1}</p>
                      </span>
                    )
                  })}
                </>
              )
            }
          }
        })
      }
      </Drawer>
    </>
  );
};

export default CustomDrawer;
