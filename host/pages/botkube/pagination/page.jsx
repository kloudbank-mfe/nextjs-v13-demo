import { Tag } from 'antd';
import useSWR from 'swr';
import CustomTable from '#/components/TablePagination';
import CustomDrawer from '#/components/Drawer';

const fetcher = (url) => fetch(url).then((res) => res.json());

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
    dataIndex: 'timestamp',
    key: 'timestamp',
  },
];

export default function Page() {
  const { data, error } = useSWR('/api/botkube', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <CustomTable
        dataList={JSON.parse(data)}
        columns={columns}
      >
      </CustomTable>
    </div>
  )
}
