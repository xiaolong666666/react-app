import { Card, VirtualScroller } from "xl";
import styles from "./index.module.less";

const VirtualList = () => {
  // @ts-ignore
  const list: any = [...new Array(1000).keys()].map((n) => ({
    id: n + 1,
    label: `label ${n + 1}`,
  }));
  return (
    <Card title="虚拟长列表">
      <VirtualScroller dataSource={list} pageSize="10">
        {(item) => (
          <div key={item.id} className={styles.item}>
            {item.label}
          </div>
        )}
      </VirtualScroller>
    </Card>
  );
};

export default VirtualList;
