import { Table } from 'antd';

const CustomTable = ({ dataList, columns } = props) => {
  return (
    <div>
      <Table
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
        }}
        dataSource={dataList}
      />
    </div>
  );
};

export default CustomTable;
