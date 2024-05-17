import { FC, ComponentProps } from "react";
import { Table, Button } from "antd";
import styles from "./index.module.less";

interface Props extends ComponentProps<typeof Table> {
  header: string;
  onAdd: () => void;
}

const CustomTable: FC<Props> = ({ header, onAdd, ...otherTableProps }) => (
  <div className={styles.custom_table}>
    <div className={styles.header}>
      <div>{header}</div>
      <Button onClick={onAdd}>添加</Button>
    </div>
    <Table {...otherTableProps} pagination={false} />
  </div>
);

export default CustomTable;
