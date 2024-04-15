import { Card, VirtualList } from "xl";
import styles from "./index.module.less";

const List = () => {
  // @ts-ignore
  const list: any = [...new Array(1000).keys()].map((n) => ({
    id: n + 1,
    label: `label ${n + 1}`,
  }));
  return (
    <Card title="虚拟长列表">
      <VirtualList dataSource={list} pageSize="10">
        {(item) => (
          <div key={item.id} className={styles.item}>
            {item.label}
          </div>
        )}
      </VirtualList>
    </Card>
  );
};

export default List;
