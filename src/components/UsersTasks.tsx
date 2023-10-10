import { Navigate, useNavigate } from "react-router-dom";
import { useTasks } from "../utils/GetTasks";

const UserDetails = () => {
  const navigate = useNavigate();
  const { setId, tasks } = useTasks();
  return (
    <div>
      {tasks.map((task) => (
        <div
          onClick={() => {
            if (!task) return <Navigate replace to={"/"} />;
            else {
              setId(task.userId);
              navigate(`/${task.id}/TaskDetails`);
            }
          }}
        >
          {task.title}
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
