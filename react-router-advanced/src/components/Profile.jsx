import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <>
      <Link to="details">Details</Link>
      <Link to="settings">Settings</Link>
      <Outlet />
    </>
  );
}

export default Profile;
