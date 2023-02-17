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
      <Space key={`space-${title}`}>
        <a type="primary" onClick={showDrawer} key={`a-${title}`}>
          {title}
        </a>
      </Space>
      <Drawer
        title={`Detail of ${title}`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        key={`drawer-${title}`}
      >
        {
          Object.entries(detail).map(([key, value], idx) => {
            if (key != '_id') {
              if (typeof value != 'object') {
                return (
                  <div key={`${key}-${value}-${idx}`}>
                    <h2>{key}</h2>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{value}</p>
                  </div>
                );
              } else {
                return (
                  <div key={`${key}-${value}-${idx}`}>
                    <h2>{key}</h2>
                    {Object.entries(value).map(([key1, value1], idx1) => {
                      return (
                        <div key={`${key1}-${value1}-${idx1}`}>
                          <h3>&nbsp;&nbsp;&nbsp;&nbsp;{key1}</h3>
                          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{value1}</p>
                        </div>
                      )
                    })}
                  </div>
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
