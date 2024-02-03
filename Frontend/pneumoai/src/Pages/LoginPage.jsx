// Your React Component (JSX)
import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "../App.css";
import Navbar from "../Components/Navbar";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="PneumoAI-text">PneumoAI</h1>
      </div>
      <div className="login-container">
        <p className="semi-bold-text">Login to your account</p>
        <div className="button">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialResponseDecoded = jwtDecode(
                credentialResponse.credential
              );
              console.log(credentialResponseDecoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>

        <form>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            ></input>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            ></input>
          </div>
        </form>
        <div>
          <Link to="/ForgotPasswordPage" className="password-text">
            Forgot your password?
          </Link>
        </div>
        <Link to="/UserPage">
          <button className="login-button">Log in</button>
        </Link>
        <div className="create-account-div">
          <p>Don't have an account?</p>
          <Link to="/SignupPage" className="create-account-text">
            create an account
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
