import { Radio, Space, Table, Tag } from 'antd';
import { useState } from 'react';
import CustomDrawer from '#/components/Drawer';

const bottomOptions = [
  {
    label: 'bottomLeft',
    value: 'bottomLeft',
  },
  {
    label: 'bottomCenter',
    value: 'bottomCenter',
  },
  {
    label: 'bottomRight',
    value: 'bottomRight',
  },
  {
    label: 'none',
    value: 'none',
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    render: (_, record) => (
      <span>
        <CustomDrawer
          title={record._id}
          detail={record}
        >
        </CustomDrawer>
      </span>
    ),
  },
  {
    title: 'Kind',
    key: '_id',
    dataIndex: 'meta',
    render: (meta) => (
      <span>{meta.kind}</span>
    ),
  },
  {
    title: 'Name',
    key: '_id',
    dataIndex: 'meta',
    render: (meta) => (
      <span>{meta.name}</span>
    ),
  },
  {
    title: 'Namespace',
    key: '_id',
    dataIndex: 'meta',
    render: (meta) => (
      <span>{meta.namespace}</span>
    ),
  },
  {
    title: 'Type',
    key: '_id',
    dataIndex: 'status',
    render: (status) => (
      <span>{status.type}</span>
    ),
  },
  {
    title: 'Level',
    key: '_id',
    dataIndex: 'status',
    render: (status) => (
      <span>
        {[status].map((status) => {
          let level = status.level;
          let color = level === 'warn' ? 'yellow' : 'green';
          if (level === 'critical') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={level}>
              {level.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Timestamp',
    dataIndex: '_id',
    key: 'timestamp',
  },
];

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

const CustomTable = ({ dataList } = props) => {
  const [bottom, setBottom] = useState('bottomCenter');
  return (
    <div>
      {/* <Radio.Group
        style={{
          marginBottom: 10,
        }}
        options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      /> */}
      <Table
        columns={columns}
        pagination={{
          position: [bottom],
        }}
        dataSource={dataList}
      />
    </div>
  );
};

export default CustomTable;
