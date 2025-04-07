import { useState, useEffect } from "react";
import { Button, Card, Input, Space } from "antd";
import styles from "../styles/day-one.module.scss";
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
        console.log(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card
      title="API Request"
      style={{ marginLeft: 10, width: 300, textAlign: "center" }}
    >
      {loading ? (
        "loading..."
      ) : (
        <div
          style={{
            border: "1px solid #ccc",
            marginBottom: 10,
            borderRadius: 4
          }}
        >
          {list.length != 0
            ? list.map((item, index) => {
                return (
                  <h3 key={item.id} className={`${styles["list-item"]} `}>
                    {index + 1}：{item.title}
                  </h3>
                );
              })
            : "尚無資訊"}
        </div>
      )}
    </Card>
  );
};
export default Request;
