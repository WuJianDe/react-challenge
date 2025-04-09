import { RouteObject } from "react-router-dom";
import LayoutPage from "../modules/layout/pages/LayoutPage";
import CounterPage from "../modules/day-one/pages/CounterPage";
import CounterPageForZustandPage from "../modules/day-three/pages/CounterPageForZustandPage";
import TwoWayBindingPage from "../modules/day-one/pages/TwoWayBindingPage";
import MessageBoardPage from "../modules/day-one/pages/MessageBoardPage";
import RequestPage from "../modules/day-one/pages/RequestPage";
import TodoListPage from "../modules/day-one/pages/TodoListPage";
import TodoListPlusPage from "../modules/day-two/pages/TodoListPlusPage";
import RouterTestPage from "../modules/day-three/pages/RouterTestPage";
import NotFoundPage from "../modules/layout/pages/NotFoundPage";
import LoginPage from "../modules/day-three/pages/LoginPage";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { path: "counter", element: <CounterPage /> },
      { path: "counter-for-zustand", element: <CounterPageForZustandPage /> },
      { path: "two-way-binding", element: <TwoWayBindingPage /> },
      { path: "todo-list", element: <TodoListPage /> },
      { path: "api-request", element: <RequestPage /> },
      { path: "message-board", element: <MessageBoardPage /> },
      { path: "todo-list-plus", element: <TodoListPlusPage /> },
      { path: "router-test", element: <RouterTestPage /> },
      { path: "router-test/:id", element: <RouterTestPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "*", element: <NotFoundPage /> }
    ]
  }
];

export default routes;
