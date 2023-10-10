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
import { UserInfo } from "../interfaces/UserInfo";

type User = {
  data: UserInfo[];
};

type ContextValue = {
  users: UserInfo[];
  setUsers: Dispatch<SetStateAction<UserInfo[]>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
};

const UsersContext = createContext<null | ContextValue>(null);
const { Provider } = UsersContext;

type UsersProviderProps = {
  children: ReactNode;
};

const UsersProvider: FC<UsersProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    axios
      .get<User>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.error(error));
  });
  return <Provider value={{ users, setUsers, id, setId }}>{children}</Provider>;
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) throw new Error("useUsers must be used within a UsersProvider");
  return context;
};

export default UsersProvider;
