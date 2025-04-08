import { useState } from "react";
import { Button, Card, Space, Input } from "antd";
import Message from "./Message";
import styles from "../styles/two-way-binding.module.scss";

const TwoWayBinding = () => {
  const [text, setText] = useState("");

  const handleClear = () => {
    setText("");
  };

  return (
    <Card title="Two Way Binding" className={styles["card"]}>
      <h1 className={styles["message"]}>
        <Message type="text" text={text} />
      </h1>
      <Space align="center" >
        <Input
          value={text}
          placeholder="Please enter text"
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="primary" danger onClick={handleClear}>
          Clear
        </Button>
      </Space>
    </Card>
  );
};

export default TwoWayBinding;
