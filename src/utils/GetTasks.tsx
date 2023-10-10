import {
  useState,
  useEffect,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";
import axios from "axios";
import { TasksInfo } from "../interfaces/TasksInfo";

type Tasks = {
  data: TasksInfo[];
};

type ContextValue = {
  tasks: TasksInfo[];
  setTasks: Dispatch<SetStateAction<TasksInfo[]>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
};

const TasksContext = createContext<null | ContextValue>(null);
const { Provider } = TasksContext;

type TasksProviderProps = {
  children: ReactNode;
};

const TasksProvider: FC<TasksProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<TasksInfo[]>([]);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    axios
      .get<Tasks>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTasks(res.data))
      .catch((error) => console.error(error));
  });
  return <Provider value={{ tasks, setTasks, id, setId }}>{children}</Provider>;
};

export const useTasks = () => {
  const context = useContext(TasksContext);
  if (!context) throw new Error("useUsers must be used within a UsersProvider");
  return context;
};

export default TasksProvider;
