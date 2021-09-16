import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
  const ctx = useContext(UserContext);
  const handleLogin = () => {
    ctx.setUser({
      name: "Numan",
      email: "numan@example.com",
    });
  };
  const handleLogout = () => {
    ctx.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {ctx.user?.name}</div>
      <div>User email is {ctx.user?.email}</div>
    </div>
  );
};

export default User;
