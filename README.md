成品：https://wujiande.github.io/react-challenge/#/counter

![預覽圖1](docs/images/demo1.png)

​在學習 React 的過程中，我透過邊學邊做的小型專案來實踐所學知識，這不僅加深了我對 React 的理解，也讓我在實作中累積了寶貴的經驗。


Day 1

一. JSX + 起手式

學習內容：

1. 建立 Vite + React 專案
2. 撰寫第一個互動元件（點擊顯示訊息）

技術要點：

1. JSX 語法（return 只能有一個根元素）
2. className 替代 class
3. 事件處理：onClick={() => ...}

二、useState + 表單綁定

學習內容：

1. 製作即時顯示的表單欄位
2. 管理多個 input 狀態

技術要點：

1. useState() 狀態管理
2. Controlled Component：value + onChange 綁定
3. 單一元件處理多欄位的表單邏輯

三、清單渲染 + 條件顯示

學習內容：

1. 建立簡單的 Todo List
2. 實作新增、刪除、切換完成

技術要點：

1. map() 渲染清單，key 屬性
2. filter() 操作資料
3. 條件渲染：&& 與 三元運算子

四、元件拆分 + Props 傳遞

學習內容：

1. 把 Todo 項目拆出成獨立元件
2. 管理父子元件資料與事件傳遞

技術要點：

1. props 傳遞資料與函式
2. 單向資料流（父傳子、子呼叫 callback）
3. 拆分 UI 與邏輯

五、useEffect + 撈 API 資料

學習內容：

1. 串接 JSONPlaceholder API
2. 實作資料載入、loading、error UI

技術要點：

1. useEffect(() => {}, [deps])
2. axios / fetch 串接 API
3. 狀態管理（loading / error / data）

六、useRef + 操作 DOM

學習內容：

1. 實作留言送出自動 focus & 捲到底

技術要點：

1. useRef() 拿 DOM
2. ref.current.scrollTop / focus()
3. 搭配 useEffect 控制 DOM 行為

七、TodoList 強化整合專案

學習內容：

1. 整合功能，加入進階體驗

技術要點：

1. localStorage 自動儲存與還原
2. 篩選功能（全部 / 完成 / 未完成）
3. 深色模式切換
4. 拖曳排序（使用 DnD 套件）

八、React Router

學習內容：

1. 導入多頁面路由架構
2. 實作動態路由與 404 fallback

技術要點：

1. BrowserRouter, Routes, Route
2. 巢狀路由 + <Outlet />
3. useParams() 抓網址參數
4. NavLink active 判斷
5. useLocation().key 重載頁面

九、React Context & Zustand 狀態管理

學習內容：

1. 比較兩種狀態共享方式
2. 實作登入狀態 / Todo 狀態共享

技術要點：

1. createContext, useContext, Provider
2. 自訂 hook（useAuth()）
3. Zustand 基礎：create(), set(), 無需 Provider