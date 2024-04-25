import React, { useCallback, useEffect, useRef, useState } from "react";
import { Card } from "xl";
import styles from "./index.module.less";

enum Sender {
  ONESELF = "oneself",
  OTHER = "other",
}

const Chat = () => {
  const [messageList, setMessageList] = useState<
    { sender: Sender; message: string }[]
  >([]);
  const wsRef = useRef<any>();
  const boxRef = useRef<any>();
  const inputRef = useRef<any>();

  const onMessage = useCallback((event: Event | any) => {
    const message = event.data;
    const currentMessage = { sender: Sender.OTHER, message };
    setMessageList((prev) => [...prev, currentMessage]);
  }, []);

  useEffect(() => {
    // wsRef.current = new WebSocket("ws://localhost:8080");
    wsRef.current = new WebSocket("ws://192.168.31.144:8080");

    wsRef.current.onopen = () => console.log("聊天室连接成功...");

    wsRef.current.onmessage = onMessage;

    wsRef.current.onclose = () => console.log("聊天室连接关闭...");

    return () => {
      wsRef.current.close();
    };
  }, [onMessage]);

  useEffect(() => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  }, [messageList]);

  const onSend = () => {
    const message = inputRef.current.value;
    inputRef.current.value = "";
    const currentMessage = { sender: Sender.ONESELF, message };
    setMessageList((prev) => [...prev, currentMessage]);
    wsRef.current.send(message);
  };

  const onClose = () => wsRef.current.close();

  return (
    <Card title="Chat">
      <div className={styles.box} ref={boxRef}>
        <div className={styles.chat_window}>
          {messageList.map(({ sender, message }, index) => (
            <div
              key={index}
              className={
                sender === Sender.ONESELF
                  ? styles.onself_wrapper
                  : styles.other_wrapper
              }
            >
              <span>{sender === Sender.ONESELF ? "我" : "对方"}</span>
              <div className={styles.message}>{message}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <input type="text" ref={inputRef} />
        <button onClick={onSend}>发送</button>
        <button onClick={onClose}>关闭</button>
      </div>
    </Card>
  );
};

export default Chat;
