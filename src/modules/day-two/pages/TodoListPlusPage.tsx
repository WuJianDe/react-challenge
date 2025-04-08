import { useEffect, useState } from "react";
import { Button, Card, Input, Space, message, Radio, Switch } from "antd";
import styles from "../styles/todo-list-plus.module.scss";
import type { RadioChangeEvent } from "antd";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from "@hello-pangea/dnd";

type FilterType = "all" | "finish" | "unfinished";

interface ListItem {
  id: string;
  name: string;
  selected: boolean;
  createdAt: string;
  completedAt: string | null;
}

const TodoListPlus = () => {
  const [list, setList] = useState<ListItem[]>([]);
  const [filteredList, setFilteredList] = useState<ListItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setList(savedTodos);
    setFilteredList(savedTodos);
  }, []);
  const [listText, setListText] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();
  const [listFilter, setListFilter] = useState<FilterType>("all");
  const handleListTextChange = (text: string) => setListText(text);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.toISOString().split("T")[0]} ${
      date.toTimeString().split(" ")[0]
    }`;
  };

  const submitList = () => {
    if (!listText.trim()) {
      messageApi.error("Please enter a valid name");
      return;
    }
    if (list.some((item) => item.name === listText.trim())) {
      messageApi.warning("Item already exists");
      return;
    }
    setList((prevList) => {
      const updatedList = [
        ...prevList,
        {
          id: Date.now().toString(),
          name: listText.trim(),
          selected: false,
          createdAt: formatDate(new Date().toISOString()),
          completedAt: null
        }
      ];
      localStorage.setItem("todos", JSON.stringify(updatedList));
      return updatedList;
    });
    setListText("");
  };

  const toggleItemSelection = (id: string) => {
    setList((prevList) => {
      const updatedList = prevList.map((item) =>
        item.id === id
          ? {
              ...item,
              selected: !item.selected,
              completedAt: !item.selected
                ? formatDate(new Date().toISOString())
                : null
            }
          : item
      );
      localStorage.setItem("todos", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const deleteItem = (id: string) => {
    setList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const clearCompleted = () => {
    if (list.every((item) => !item.selected)) {
      messageApi.warning("No completed items to clear");
      return;
    }
    setList((prevList) => {
      const updatedList = prevList.filter((item) => !item.selected);
      localStorage.setItem("todos", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const changeFilter = (e: RadioChangeEvent) => {
    const filter = e.target.value as FilterType; // 明確類型轉換
    setListFilter(filter);
    if (filter === "all") {
      setFilteredList(list);
    } else if (filter === "finish") {
      setFilteredList(list.filter((item) => item.selected));
    } else if (filter === "unfinished") {
      setFilteredList(list.filter((item) => !item.selected));
    }
  };

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  const toggleDarkMode = (checked: boolean) => {
    setIsDarkMode(checked);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    setList((prevList) => {
      const updatedList = Array.from(prevList);
      const [movedItem] = updatedList.splice(source.index, 1);
      updatedList.splice(destination.index, 0, movedItem);
      localStorage.setItem("todos", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <Card
      className={`${styles["card"]} ${isDarkMode ? styles["dark-mode"] : ""}`}
    >
      {contextHolder}
      <Space align="center" style={{ marginBottom: "10px" }}>
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </Space>
      <Radio.Group value={listFilter} onChange={changeFilter}>
        <Radio.Button value="all">all</Radio.Button>
        <Radio.Button value="finish">finish</Radio.Button>
        <Radio.Button value="unfinished">unfinished</Radio.Button>
      </Radio.Group>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo-list">
          {(provided) => (
            <div
              className={styles["list"]}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredList.length
                ? filteredList.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          className={`${styles["list-item"]} ${
                            snapshot.isDragging ? styles["dragging"] : ""
                          } ${item.selected ? styles["selected"] : ""}`} // 添加 selected 類名
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            boxSizing: "border-box",
                            margin: "0",
                            padding: "10px",
                            width: "100%"
                          }}
                          onClick={() => toggleItemSelection(item.id)}
                        >
                          <span>
                            {index + 1}: {item.name}
                            <br />
                            <small>Created: {item.createdAt}</small>
                            {item.completedAt && (
                              <>
                                <br />
                                <small>Completed: {item.completedAt}</small>
                              </>
                            )}
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
                        </div>
                      )}
                    </Draggable>
                  ))
                : "No message yet"}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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
      <Space align="center" style={{ marginTop: "10px" }}>
        <Button type="primary" danger onClick={clearCompleted}>
          Clear Completed
        </Button>
      </Space>
    </Card>
  );
};

export default TodoListPlus;
