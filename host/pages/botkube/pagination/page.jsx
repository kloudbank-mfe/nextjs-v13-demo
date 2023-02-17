import { Tag } from 'antd';
import useSWR from 'swr';
import { useState, useEffect } from 'react';
import CustomTable from '#/components/TablePagination';
import CustomDrawer from '#/components/Drawer';

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
          key={record._id}
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
        {[status].map((status, idx) => {
          let level = status.level;
          let color = level === 'warn' ? 'yellow' : 'green';
          if (level === 'critical') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={`${level}-${idx}`}>
              {level.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
];

const fetcher = (url) => fetch(url).then((res) => res.json());
const useBotkubeInfo = () => {
  const { data, error } = useSWR('/api/botkube', fetcher);

  return {
    data,
    error,
  };
};

export default function Page() {
  const { data, error } = useBotkubeInfo();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    if (data) {
      setDataList(data);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <CustomTable
        dataList={dataList}
        columns={columns}
      >
      </CustomTable>
    </div>
  )
}
