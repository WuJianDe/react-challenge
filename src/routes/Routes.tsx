import { RouteObject } from "react-router-dom";
import LayoutPage from "../modules/layout/pages/LayoutPage";
import CounterPage from "../modules/day-one/pages/CounterPage";
import TwoWayBindingPage from "../modules/day-one/pages/TwoWayBindingPage";
import MessageBoardPage from "../modules/day-one/pages/MessageBoardPage";
import RequestPage from "../modules/day-one/pages/RequestPage";
import TodoListPage from "../modules/day-one/pages/TodoListPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "counter", element: <CounterPage /> },
      { path: "two-way-binding", element: <TwoWayBindingPage /> },
      { path: "todo-list", element: <TodoListPage /> },
      { path: "api-request", element: <RequestPage /> },
      { path: "message-board", element: <MessageBoardPage /> },
    ],
  },
];

export default routes;
