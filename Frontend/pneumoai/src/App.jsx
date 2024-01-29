import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Navbar from "./Components/Navbar";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignupPage" element={<SignupPage />}></Route>
          <Route
            path="/ForgotPasswordPage"
            element={<ForgotPasswordPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
