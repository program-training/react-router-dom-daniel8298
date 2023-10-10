import { useNavigate } from "react-router-dom";
import { useUsers } from "../utils/GetUsers";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id, users } = useUsers();
  const user = users.find((user) => Number(user.id) === id);
  return (
    <div>
      <div onClick={() => navigate(`/${user.id}/UsersTasks`)} key={user.id}>
        tasks
      </div>
      <h1>{user?.email}</h1>
      <span>
        {user?.address.city}, {user?.address.street}
      </span>
      <span>{user?.phone}</span>
    </div>
  );
};

export default UserDetails;
