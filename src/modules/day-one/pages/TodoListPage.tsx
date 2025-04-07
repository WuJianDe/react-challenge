import { useState } from "react";
import { Button, Card, Input, Space, message } from "antd";
import styles from "../styles/day-one.module.scss";
interface ListItem {
  id: string;
  name: string;
  selected: boolean;
}
const TodoList = () => {
  const [list, setList] = useState<ListItem[]>([
    { id: "1", name: "React", selected: false },
    { id: "2", name: "Vue", selected: false },
    { id: "3", name: "Angular", selected: false }
  ]);
  const [listText, setListText] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();
  const handleListTextChange = (text: string) => {
    setListText(text);
  };
  const submitList = () => {
    if (listText === "") {
      messageApi.open({
        key: "updatable",
        type: "error",
        content: "Please enter name"
      });
      return;
    }
    setList([
      ...list,
      { id: Date.now().toString(), name: listText, selected: false }
    ]);
    setListText("");
  };

  const toggleItemSelection = (id: string) => {
    setList((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const deleteItem = (id: string) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  return (
    <Card
      title="To Do list"
      style={{ marginLeft: 10, width: 300, textAlign: "center" }}
    >
      {contextHolder}
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
                <h3
                  key={item.id}
                  className={`${styles["list-item"]} `}
                  onClick={() => toggleItemSelection(item.id)}
                >
                  <span
                    className={`${item.selected ? styles["selected"] : ""}`}
                  >
                    {index + 1}：{item.name}
                  </span>
                  <span
                    className={styles["list-item-close"]}
                    onClick={() => deleteItem(item.id)}
                  >
                    X
                  </span>
                </h3>
              );
            })
          : "尚無資訊"}
      </div>
      <Space align="center">
        <Input
          value={listText}
          placeholder="Please enter name"
          onChange={(e) => {
            handleListTextChange(e.target.value);
          }}
        />
        <Button type="primary" onClick={() => submitList()}>
          add
        </Button>
      </Space>
    </Card>
  );
};
export default TodoList;
