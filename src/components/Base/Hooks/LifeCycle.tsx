import { useEffect, useLayoutEffect, useState } from "react";

const LifeCycle = (props: any) => {
  const [num, setNum] = useState<number>(() => {
    console.log("static getDerivedStateFromProps");
    return 0;
  });

  useEffect(() => {
    console.log("componentDidMount");
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  useLayoutEffect(() => {
    console.log("componentDidMount-layout");
  }, []);

  useEffect(() => {
    console.log("static getDerivedStateFromProps");
  }, [props]);

  useEffect(() => {
    console.log("componentDidUpdate");
  });

  return (
    <>
      <h3>Life Cycle</h3>
      <p>num: {num}</p>
      <button onClick={() => setNum(Math.random())}>change num</button>
    </>
  );
};

export default LifeCycle;
