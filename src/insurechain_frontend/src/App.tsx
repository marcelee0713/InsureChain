import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/auth/Signin";
import SigninLayout from "./layouts/SigninLayout";
import Signup from "./pages/auth/Signup";
import HomeLayout from "./layouts/HomeLayout";
import Profile from "./pages/Profile";
import Challenge from "./pages/Challenge";
import Dashboard from "./pages/Dashboard";
import InsurancePage from "./pages/InsurancePage";

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
          <Route path="/home" element={<HomeLayout />}>
            <Route index path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="challenges" element={<Challenge />} />
            <Route path="insurance/:id" element={<InsurancePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
