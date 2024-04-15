import { Card } from "xl";
import Context from "./Context";
import LifeCycle from "./LifeCycle";
import Reducer from "./Reducer";
import Ref from "./Ref";

const Hooks = () => {
  return (
    <Card title="Hooks">
      <LifeCycle />
      <Reducer />
      <Ref />
      <Context />
    </Card>
  );
};

export default Hooks;
