import { useRef, useState, useEffect } from "react";
import { Button, Card, Space, message } from "antd";
import styles from "../styles/day-one.module.scss";

const MessageBoard = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [list, setList] = useState<string[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [list]);
  const submit = () => {
    if (inputRef.current) {
      if (inputRef.current.value.trim() === "") {
        messageApi.open({
          key: "updatable",
          type: "error",
          content: "Please enter message"
        });
        return;
      }
      setList([...list, inputRef.current.value]);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <Card
      title="Message Board"
      style={{ marginLeft: 10, width: 300, textAlign: "center" }}
    >
      {contextHolder}
      <div
        ref={listRef}
        className={styles["message-board-box"]}
      >
        {list.length != 0
          ? list.map((item) => {
              return (
                <div className={styles["message-board-item"]} key={item}>
                  <span>{item}</span>
                  <span className={styles["time"]}>
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
              );
            })
          : "No message yet"}
      </div>
      <Space align="center">
        <input ref={inputRef} placeholder="Please enter message" />
        <Button type="primary" onClick={submit}>
          Submit
        </Button>
      </Space>
    </Card>
  );
};
export default MessageBoard;
