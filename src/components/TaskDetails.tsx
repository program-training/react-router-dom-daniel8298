import { useTasks } from "../utils/GetTasks";

const TaskDetails = () => {
  const { id, tasks } = useTasks();
  const task = tasks.find((task) => Number(task.id) === id);
  return (
    <div>
      <h1>{task?.title}</h1>
      <span>{task?.completed ? "true" : "false"}</span>
    </div>
  );
};

export default TaskDetails;
