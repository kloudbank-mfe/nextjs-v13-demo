import { Input, Space } from 'antd';
import CustomTable from '#/components/VirtualList';
import useSWR from 'swr';
import { useState, useEffect } from 'react';

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
const useBotkubeInfo = () => {
  const { data, error } = useSWR('/api/botkube', fetcher);

  return {
    data,
    error,
  };
};

const { Search } = Input;

export default function Page() {
  const { data, error } = useBotkubeInfo();
  const [dataList, setDataList] = useState([]);
  const [filterInput, setFilterInput] = useState('');

  useEffect(() => {
    if (data) {
      setDataList(data);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const filterData = () => {
    if (filterInput === '') return dataList

    if (filterInput) {
      return dataList.filter(({ summary }) => summary.includes(filterInput))
    }
  }

  return (
    <>
      {/* <Space> */}
        <Search
          size="large"
          placeholder="Enter the keyword (search only summary)"
          allowClear
          enterButton="Search"
          onSearch={setFilterInput}
        />
      {/* </Space> */}
      <Space>
        <CustomTable
          columns={columns}
          dataList={filterData()}
        >
        </CustomTable>
      </Space>
    </>
  )
}
