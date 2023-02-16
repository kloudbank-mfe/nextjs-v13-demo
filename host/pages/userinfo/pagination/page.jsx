import { Tag, Modal, Input, Space, DatePicker } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useSWR from 'swr';
import CustomTable from '#/components/TablePagination';
import CustomDescriptions from '#/components/DrawerDescriptions';
import CustomModal from '#/components/ModalEdit';
import { useState, useEffect } from 'react';

const { Search } = Input;
const { RangePicker } = DatePicker;

const fetcher = (url) => fetch(url).then((res) => res.json());
const useUserInfo = () => {
  const { data, error } = useSWR('/api/userinfo', fetcher);

  return {
    data,
    error,
  };
};

export default function Page() {
  const { data, error } = useUserInfo();
  const [dataList, setDataList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(null);
  const [filterInput, setFilterInput] = useState('');
  const [dateRange, setDateRange] = useState([]);

  useEffect(() => {
    if (data) {
      setDataList(data);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const columns = [
    {
      title: 'Personal',
      key: 'key',
      render: (_, record) => (
        <span>
          <CustomDescriptions 
            title={record.personal}
            detail={record}
            key={record.key}
          />
        </span>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'key',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'key',
    },
    {
      title: 'Enter Date',
      dataIndex: 'enterDate',
      key: 'key',
    },
    {
      title: 'Enable',
      dataIndex: 'enable',
      key: 'key',
      render: (enable) => (
        <span>
          {[enable].map((enable) => {
            let color = enable === 'False' ? 'red' : 'green';
            return (
              <Tag color={color} key={enable}>
                {enable.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      key: "action",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <div className="flex">
              <EditOutlined
                style={{ color: "black" }}
                onClick={() => onEdit(record)}
              />
              <DeleteOutlined
                style={{ color: "red" }}
                onClick={() => onDelete(record)}
              />
            </div>
          </>
        );
      },
    },
  ];

  const onDelete = (record) => {
    Modal.confirm({
      title: "Are you sure you want to delete this",
      onOk: () => {
        setDataList((pre) => {
          return pre.filter((user) => user.personal != record.personal);
        });
      },
    });
  };

  const onEdit = (record) => {
    setVisible(true);
    setEdit({ ...record });
  };

  const onResetEditing = () => {
    setVisible(false);
    setEdit(true);
  };

  const filterData = () => {
    let filteredData = [...dataList];

    // Filter by date range
    if (dateRange !== null) {
      if (dateRange.length > 0) {
        // filteredData = filteredData.filter((item) => {
        //   const itemDate = moment(item.enterDate, "YYYY/MM/DD");
        //   return itemDate.isBetween(dateRange[0], dateRange[1], null, '[]');
        // });
        const [start, end] = dateRange;
        const startDate = new Date(start.format('YYYY/MM/DD'));
        const endDate = new Date(end.format('YYYY/MM/DD'));

        filteredData = dataList.filter((item) => {
          const itemDate = new Date(item.enterDate);
          return itemDate >= startDate && itemDate <= endDate;
        });
      }
    }

    // Filter by search input
    if (filterInput !== '') {
      filteredData = filteredData.filter(({ personal, name, company, email }) => {
        const targetStr = `${personal}${name}${company}${email}`.toLowerCase();
        return targetStr.includes(filterInput.toLowerCase());
      });
    }

    return filteredData;
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  return (
    <>
      <Space direction='vertical'>
        <RangePicker
          format="YYYY/MM/DD"
          onChange={handleDateChange}
          allowClear
        />
        <Search
          style={{ width: 500 }}
          size="middle"
          placeholder="Enter the keyword (Personal, Name, Company or E-mail)"
          allowClear
          enterButton="Search"
          onSearch={setFilterInput}
        />
      </Space>
      <CustomTable dataList={filterData()} columns={columns} />
      <CustomModal
        visible={visible}
        edit={edit}
        setEdit={setEdit}
        setData={setDataList}
        onResetEditing={onResetEditing}
        setVisible={setVisible}
      />
    </>
  );
}