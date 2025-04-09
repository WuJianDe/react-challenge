import { Button, Card, Space } from "antd";
import styles from "../styles/counter.module.scss";
import { useCounterStore } from "@/stores/counterStore";

interface CounterState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

const Counter = () => {
  const count = useCounterStore((state: CounterState) => state.count);
  const increase = useCounterStore((state: CounterState) => state.increase);
  const decrease = useCounterStore((state: CounterState) => state.decrease);
  const reset = useCounterStore((state: CounterState) => state.reset);
  return (
    <Card title="Counter For Zustand " className={styles["card"]}>
      <h1>{count}</h1>
      <Space>
        <Button type="primary" className={styles["button"]} onClick={increase}>
          Increase
        </Button>
        <Button type="primary" className={styles["button"]} onClick={decrease}>
          decrease
        </Button>
        <Button
          type="primary"
          className={styles["button"]}
          disabled={count === 0}
          danger
          onClick={reset}
        >
          Reset
        </Button>
      </Space>
    </Card>
  );
};

export default Counter;
