import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
// import Signin from './components/Signin';
import LandingPage from "./pages/LandingPage";
import SignIn from "./components/Signin";
import SigninLayout from "./layouts/SigninLayout";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="/registerlayout" element={<SigninLayout />}>
              <Route index element={<SignIn />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
