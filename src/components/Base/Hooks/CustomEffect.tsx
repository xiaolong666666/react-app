import React, { useState, useEffect, useRef } from "react";

type Props = {};

const useCustomEffect = (callback: () => void, depend?: any[] | undefined) => {
  const ref: any = useRef<any[]>(null);
  if (depend) {
    if (!ref.current) {
      callback();
      ref.current = depend;
    } else {
      if (depend.some((v, idx) => v !== ref.current[idx])) {
        ref.current = depend;
        callback();
      }
    }
  } else {
    callback();
  }
};

const CustomEffect = (props: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count", count);
  }, [count]);

  useCustomEffect(() => {
    console.log("useCustomEffect count", count);
  }, [count]);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((pre) => pre + 1)}>+</button>
    </div>
  );
};

export default CustomEffect;
