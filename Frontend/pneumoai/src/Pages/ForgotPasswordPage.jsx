import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
const ForgotPasswordPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="PneumoAI-text">PneumoAI</h1>
      </div>
      <div className="container">
        <p className="semi-bold-text">Reset your password</p>
        {/* <p className="Enter-email-text">
        Enter your email and check your inbox for instructions. Please alsocheck
        your spam folder
      </p> */}

        <div>
          <form>
            <input
              className="email-input"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            ></input>
          </form>
        </div>
        <p>Please confirm that you are not a bot.</p>
        <button className="send-button">Send</button>
        <div className="create-account-div">
          <p>Already member? </p>
          <Link to="/LoginPage" className="create-account-text">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
