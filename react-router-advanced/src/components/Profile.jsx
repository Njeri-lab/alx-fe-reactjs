import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

function Profile() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Link to="details">Details</Link>
      <Link to="settings">Settings</Link>
      <Outlet />
      */}
    </>
  );
}

export default Profile;
