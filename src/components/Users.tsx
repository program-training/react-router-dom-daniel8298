import { useUsers } from "../utils/GetUsers";
import { Navigate, useNavigate } from "react-router-dom";

const AllUsers = () => {
  const navigate = useNavigate();
  const { users, setId } = useUsers();

  return (
    <div>
      {users.map((user) => (
        <div
          onClick={() => {
            if (!user) return <Navigate replace to={"/"} />;
            else {
              setId(user.id);
              navigate(`/users/${user.id}`);
            }
          }}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
