import { useState, useEffect } from "react";
import { Card } from "antd";
import styles from "../styles/request.module.scss";
import axios from "axios";

interface ListItem {
  id: number;
  title: string;
}

const Request = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setList(res.data.slice(0, 5));
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card title="API Request" className={styles["card"]}>
      {loading ? (
        "loading..."
      ) : (
        <div
          className={styles["list"]}
        >
          {list.length != 0
            ? list.map((item, index) => {
                return (
                  <h3 key={item.id} className={`${styles["list-item"]} `}>
                    {index + 1}：{item.title}
                  </h3>
                );
              })
            : "No message yet"}
        </div>
      )}
    </Card>
  );
};
export default Request;
