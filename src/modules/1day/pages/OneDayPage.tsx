import Counter from "./Counter";
import TwoWayBinding from "./TwoWayBinding";
import TodoList from "./TodoList";
import Request from "./Request";
import MessageBoard from "./MessageBoard";
const OneDayPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#f0f2f5"
      }}
    >
      <Counter />
      <TwoWayBinding />
      <TodoList />
      <Request />
      <MessageBoard />
    </div>
  );
};

export default OneDayPage;
