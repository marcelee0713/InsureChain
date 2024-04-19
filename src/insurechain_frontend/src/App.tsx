import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/auth/Signin";
import SigninLayout from "./layouts/SigninLayout";
import Signup from "./pages/auth/Signup";
import HomeLayout from "./layouts/HomeLayout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/auth" element={<SigninLayout />}>
              <Route index path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<Signup />} />
            </Route>
          </Route>
          <Route path="/dashboard" element={<HomeLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
