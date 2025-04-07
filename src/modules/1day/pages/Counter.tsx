import { useState } from "react";
import { Button, Card } from "antd";
import Message from "./Message";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <Card
      title="Counter"
      style={{ width: 300, textAlign: "center", height: 200 }}
    >
      <h1>
        <Message type="count" count={count} />
      </h1>
      <Button type="primary" onClick={handleAdd} style={{ marginTop: 16 }}>
        Add
      </Button>
      <Button
        type="primary"
        danger
        onClick={handleReset}
        style={{ margin: "16px 0 0 10px" }}
      >
        Reset
      </Button>
    </Card>
  );
};

export default Counter;
