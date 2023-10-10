import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import TaskDetails from "./components/TaskDetails";
import UsersTasks from "./components/UsersTasks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/:id/UserDetails" element={<UserDetails />}></Route>
          <Route path="/:id/UsersTasks" element={<UsersTasks />}></Route>
          <Route path="/:id/TaskDetails" element={<TaskDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
