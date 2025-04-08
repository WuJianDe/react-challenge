import { useRef, useState, useEffect } from "react";
import { Button, Card, Space, message } from "antd";
import styles from "../styles/message-board.module.scss";

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
    const inputValue = inputRef.current?.value.trim();
    if (!inputValue) {
      messageApi.error("Please enter message");
      return;
    }
    setList((prevList) => [...prevList, inputValue]);
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <Card title="Message Board" className={styles["card"]}>
      {contextHolder}
      <div ref={listRef} className={styles["list"]}>
        {list.length
          ? list.map((item, index) => (
              <div className={styles["list-item"]} key={`${item}-${index}`}>
                <span>{item}</span>
                <span className={styles["list-item-time"]}>
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            ))
          : "No message yet"}
      </div>
      <Space align="center">
        <input
          className={styles["input"]}
          ref={inputRef}
          placeholder="Please enter message"
        />
        <Button type="primary" onClick={submit}>
          Submit
        </Button>
      </Space>
    </Card>
  );
};

export default MessageBoard;
