import { Tag, Modal } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import useSWR from 'swr';
import CustomTable from '#/components/TablePagination';
import CustomDescriptions from '#/components/DrawerDescriptions';
import CustomModal from '#/components/ModalEdit';
import { useState, useEffect } from 'react';

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

  return (
    <div>
      <CustomTable
        dataList={dataList}
        columns={columns}
      />
      <CustomModal
        visible={visible}
        edit={edit}
        setEdit={setEdit}
        setData={setDataList}
        onResetEditing={onResetEditing}
        setVisible={setVisible}
      />
    </div>
  )
}
