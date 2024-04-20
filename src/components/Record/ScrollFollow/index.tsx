import { Card, AnchorScroller } from "xl";
import { getRandomId, getRandomColor, getRandomHeight } from "@/utils/tools";

const list: any = [...new Array(5)].map(() => ({
  id: "a" + getRandomId(),
  title: getRandomColor(),
  height: 100 + getRandomHeight(),
}));
const ScrollFollow = () => {
  console.dir(list);
  return (
    <Card title="滚动跟随">
      <AnchorScroller dataSource={list} />
    </Card>
  );
};

export default ScrollFollow;
