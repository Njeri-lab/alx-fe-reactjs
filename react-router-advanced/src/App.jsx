import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="Profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          <Route path="/blog/:Id" element={<BlogPost />} />
        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
