import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function SignupPage() {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1 className="PneumoAI-text">PneumoAI</h1>
        <p className="semi-bold-text">Create new account</p>
        <div className="button">
          <button className="google-icon-button">
            <FcGoogle /> Sign up with google
          </button>
        </div>
        <form>
          <div>
            <input
              type="text"
              id="text"
              name="Name"
              placeholder="Enter your Name"
            ></input>
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
        <Link to="/RegisteredPage">
          <button className="login-button">Signup</button>
        </Link>

        <div className="create-account-div">
          <p>Already member? </p>
          <Link to="/LoginPage" className="create-account-text">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
