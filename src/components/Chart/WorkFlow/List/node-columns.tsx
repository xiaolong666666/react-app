import { DeleteOutlined } from "@ant-design/icons";

const columns = ({ onDelete }: any) => [
  {
    title: "名字",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "属性",
    dataIndex: "attribute",
    key: "attribute",
  },
  {
    title: "备注",
    dataIndex: "note",
    key: "note",
  },
  {
    title: "操作",
    key: "operator",
    render: (_: any, { id }: any) => (
      <DeleteOutlined key="delete" onClick={() => onDelete(id)} />
    ),
  },
];

export default columns;
