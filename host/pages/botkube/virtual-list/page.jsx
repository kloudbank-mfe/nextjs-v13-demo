import CustomTable from '#/components/VirtualList';
import useSWR from 'swr';

const columns = [
  {
    title: 'ID',
    dataIndex: '_id',
    key: '_id',
    width: 300,
  },
  {
    title: 'Summary',
    dataIndex: 'summary',
    key: 'summary',
    width: 800,
  },
  {
    title: 'Timestamp',
    dataIndex: 'timestamp',
    key: 'timestamp',
    width: 300,
  },
];

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data, error } = useSWR('/api/botkube', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <CustomTable
        columns={columns}
        dataList={JSON.parse(data)}
      >
      </CustomTable>
    </div>
  )
}
