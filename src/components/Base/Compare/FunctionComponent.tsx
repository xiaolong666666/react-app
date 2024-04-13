import React from "react";

interface Props {
  user: string;
}

const FunctionComponent: React.FC<Props> = ({ user }) => {
  const showMessage = () => {
    alert("Followed " + user);
  };

  const handleClick = () => {
    setTimeout(showMessage, 3000);
  };

  return (
    <>
      <h3>Function</h3>
      <p>{user}</p>
      <button onClick={handleClick}>Function Follow</button>
    </>
  );
};

export default FunctionComponent;
