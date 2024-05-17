import { DeleteOutlined } from "@ant-design/icons";

const columns = ({ onDelete }: any) => [
  {
    title: "起点",
    dataIndex: "source",
    key: "source",
  },
  {
    title: "终点",
    dataIndex: "target",
    key: "target",
  },
  {
    title: "操作",
    render: (_: any, { id }: any) => (
      <DeleteOutlined key="delete" onClick={() => onDelete(id)} />
    ),
  },
];

export default columns;
