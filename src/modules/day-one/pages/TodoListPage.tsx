import { useState } from "react";
import { Button, Card, Input, Space, message } from "antd";
import styles from "../styles/message-board.module.scss";

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

  const handleListTextChange = (text: string) => setListText(text);

  const submitList = () => {
    if (!listText.trim()) {
      messageApi.error("Please enter a valid name");
      return;
    }
    if (list.some((item) => item.name === listText.trim())) {
      messageApi.warning("Item already exists");
      return;
    }
    setList((prevList) => [
      ...prevList,
      { id: Date.now().toString(), name: listText.trim(), selected: false }
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
    <Card title="To Do List">
      {contextHolder}
      <div className={styles["list"]}>
        {list.length
          ? list.map((item, index) => (
              <h3
                key={item.id}
                className={`${styles["list-item"]}`}
                onClick={() => toggleItemSelection(item.id)}
              >
                <span className={`${item.selected ? styles["selected"] : ""}`}>
                  {index + 1}: {item.name}
                </span>
                <span
                  className={styles["list-item-close"]}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteItem(item.id);
                  }}
                >
                  X
                </span>
              </h3>
            ))
          : "No message yet"}
      </div>
      <Space align="center">
        <Input
          value={listText}
          placeholder="Please enter name"
          onChange={(e) => handleListTextChange(e.target.value)}
        />
        <Button type="primary" onClick={submitList}>
          Add
        </Button>
      </Space>
    </Card>
  );
};

export default TodoList;
