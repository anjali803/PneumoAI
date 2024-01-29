import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div className="login-container">
        <h1 className="PneumoAI-text">PneumoAI</h1>
        <p className="login-text">Login to your account</p>
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

        <button className="login-button">Login</button>

        <div className="create-account-div">
          <p>Don't have an account?</p>
          <Link to="/SignInPage" className="create-account-text">
            create an account
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
