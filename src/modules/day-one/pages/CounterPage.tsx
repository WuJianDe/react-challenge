import { useState } from "react";
import { Button, Card } from "antd";
import Message from "./Message";
import styles from "../styles/counter.module.scss";
const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <Card
      title="Counter "
      className={styles["card"]}
    >
      <h1>
        <Message type="count" count={count} />
      </h1>
      <Button
        type="primary"
        className={styles["button"]}
        onClick={incrementCount}
      >
        Add
      </Button>
      <Button
        type="primary"
        className={styles["button"]}
        disabled={count === 0}
        danger
        onClick={resetCount}
      >
        Reset
      </Button>
    </Card>
  );
};

export default Counter;
