import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <>
      <div className="login-container">
        <h1 className="PneumoAI-text">PneumoAI</h1>
        <p className="login-text">Create new account</p>
        <div className="button">
          <button className="facebook-icon-button">
            <FaFacebook /> Facebook
          </button>
          <button className="google-icon-button">
            <FaGoogle /> Google
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

        <button className="login-button">Signup</button>

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
