import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UsersProvider from "./utils/GetUsers.tsx";
import TasksProvider from "./utils/GetTasks.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskDetails from "./components/TaskDetails.tsx";
import UserDetails from "./components/UserDetails.tsx";
import Users from "./components/Users.tsx";
import UsersTasks from "./components/UsersTasks.tsx";
import HomePage from "./components/HomePage.tsx";
import Products from "./components/Products.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserDetails />} />
              <Route path="/users/:id/tasks" element={<UsersTasks />} />
              <Route
                path="/users/:id/tasks/:taskId"
                element={<TaskDetails />}
              />
              <Route path="/products" element={<Products />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </UsersProvider>
  </React.StrictMode>
);
// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <UsersProvider>
//       <TasksProvider>
//         <App />
//       </TasksProvider>
//     </UsersProvider>
//   </React.StrictMode>
// );
