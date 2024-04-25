import { useCallback, useEffect, useRef } from "react";

type callbackParams = () => unknown;

export const usePolling = (callback: callbackParams, delay: number) => {
  const timerRef = useRef<any>();

  const stop = useCallback(() => clearTimeout(timerRef.current), []);

  useEffect(() => {
    const loop = () => {
      callback();
      timerRef.current = setTimeout(loop, delay);
    };
    loop();

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [callback, delay]);

  return [stop];
};
