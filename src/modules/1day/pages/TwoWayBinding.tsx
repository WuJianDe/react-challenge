import { useState } from "react";
import { Button, Card, Space, Input } from "antd";
import Message from "./Message";
const TwoWayBinding = () => {
  const [text, setText] = useState("");
  const handleTextChange = (text: string) => {
    setText(text);
  };
  const handleClear = () => {
    setText("");
  };
  return (
    <Card
      title="Two Way Binding"
      style={{ marginLeft: 10, width: 300, textAlign: "center", height: 200 }}
    >
      <h1 style={{ height: 60 }}>
        <Message type="text" text={text} />
      </h1>
      <Space align="center">
        <Input
          value={text}
          placeholder="Please enter text"
          onChange={(e) => {
            handleTextChange(e.target.value);
          }}
        />
        <Button type="primary" danger onClick={handleClear}>
          Clear
        </Button>
      </Space>
    </Card>
  );
};
export default TwoWayBinding;
