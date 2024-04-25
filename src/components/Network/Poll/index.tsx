import React, { useCallback, useEffect } from "react";
import { usePolling } from "@/utils/hooks";
import { Card } from "xl";

enum Status {
  NORMAL = "NORMAL",
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
}

const StatusText = {
  NORMAL: "常态",
  LOADING: "更新中...",
  SUCCESS: "成功",
};

export const Poll = () => {
  const [status, setStatus] = React.useState<Status>(Status.LOADING);

  const query = useCallback(async () => {
    const currentStatus: any = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          ["NORMAL", "LOADING", "SUCCESS"][Math.floor(Math.random() * 3)]
        );
      }, 1000);
    });
    setStatus(currentStatus);
  }, []);

  const [stop] = usePolling(query, 2000);

  useEffect(() => {
    if (status === "SUCCESS") {
      stop();
    }
  }, [stop, status]);

  return (
    <Card title="Poll">
      <div>状态：{StatusText[status]}</div>
    </Card>
  );
};

export default Poll;
