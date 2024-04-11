import React, { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const Compare = () => {
  const [user, setUser] = useState("xl");

  const onChangeUser = () => {
    setUser("小龙");
  };

  return (
    <div>
      <h2>Compare</h2>
      <button onClick={onChangeUser}>change user</button>
      <ClassComponent user={user} />
      <FunctionComponent user={user} />
    </div>
  );
};

export default Compare;
