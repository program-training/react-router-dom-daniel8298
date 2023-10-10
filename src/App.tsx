import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import TaskDetails from "./components/TaskDetails";
import UsersTasks from "./components/UsersTasks";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          top: "0px",
          padding: "12px",
          boxSizing: "border-box",
          gap: "12px",
          width: "100vw",
        }}
      >
        <Link to={"/products"}>products</Link>
        <Link to={"/users"}>users</Link>
        <Link to={"/"}>main page</Link>
      </div>
      <Outlet />
    </>
  );
}
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Users />}></Route>
//           <Route path="/:id/UserDetails" element={<UserDetails />}></Route>
//           <Route path="/:id/UsersTasks" element={<UsersTasks />}></Route>
//           <Route path="/:id/TaskDetails" element={<TaskDetails />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

export default App;
