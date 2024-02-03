import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <h1 className="PneumoAI-text">PneumoAI</h1>
        <p className="semi-bold-text">Login to your account</p>
        <div className="button">
          <button className="google-icon-button">
            <FcGoogle /> Login with google
          </button>
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
}

export default LoginPage;
