import { Button, Drawer, Space } from 'antd';
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
        Object.entries(detail).map(([key, value]) => {
          if (key != '_id') {
            if (typeof value != 'object') {
              return (
                <>
                  <h2>{key}</h2>
                  <p>{value}</p>
                </>
              );
            } else {
              return (
                <>
                  <h2>{key}</h2>
                  {Object.entries(value).map(([key, value]) => {
                    return (
                      <>
                        <h3>{key}</h3>
                        <p>{value}</p>
                      </>
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

// {
//   "_id": "63c76aefabfdc18f7c6cb590",
//   "meta": {
//     "kind": "Pod",
//     "name": "hcp-bpcp-backend-mvp-77476b69dd-trndf",
//     "namespace": "hcp-bpcp-backend",
//     "cluster": "bpcd01"
//   },
//   "status": {
//     "type": "create",
//     "level": "info"
//   },
//   "summary": "Pod *hcp-bpcp-backend/hcp-bpcp-backend-mvp-77476b69dd-trndf* has been created in *bpcd01* cluster\n",
//   "timestamp": "2023-01-18T03:43:43Z",
//   "createdAt": "2023-01-18T03:43:43.536Z",
//   "updatedAt": "2023-01-18T03:43:43.536Z"
// },

export default CustomDrawer;
