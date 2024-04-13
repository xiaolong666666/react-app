import { useState } from "react";
import Card from "@/components/xl/Card";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const Compare = () => {
  const [user, setUser] = useState("xl");

  const onChangeUser = () => {
    setUser("小龙");
  };

  return (
    <Card title="Compare">
      <button onClick={onChangeUser}>change user</button>
      <ClassComponent user={user} />
      <FunctionComponent user={user} />
    </Card>
  );
};

export default Compare;
