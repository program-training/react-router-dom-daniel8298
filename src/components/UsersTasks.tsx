import { Navigate, useNavigate } from "react-router-dom";
import { useTasks } from "../utils/GetTasks";
import { useUsers } from "../utils/GetUsers";

const UserDetails = () => {
  const navigate = useNavigate();
  const { setId, tasks } = useTasks();
  const { id } = useUsers();
  const tasksUser = tasks.filter((user) => Number(user.userId) === id);
  return (
    <div>
      {tasksUser.map((task) => (
        <div
          onClick={() => {
            if (!task) return <Navigate replace to={"/"} />;
            else {
              setId(task.id);
              navigate(`/users/${task.userId}/tasks/${task.id}`);
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
