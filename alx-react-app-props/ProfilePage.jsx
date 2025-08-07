import { useContext } from "react";
import UserInfo from "./UserInfo";
import UserContext from "./UserContext";

function ProfilePage() {
  const useData = useContext(UserContext);
  return <UserInfo userData={userData} />;
}

export default UserInfo;
