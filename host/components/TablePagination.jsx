import { Table } from 'antd';

const CustomTable = ({ dataList, columns, onChange } = props) => {
  return (
    <div>
      <Table
        columns={columns}
        pagination={{
          position: ['bottomCenter'],
        }}
        dataSource={dataList}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomTable;
