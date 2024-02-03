import { Link } from "react-router-dom";
const RegisteredPage = () => {
  return (
    <>
      <div>
        <h1 className="PneumoAI-text">PneumoAI</h1>
      </div>
      <div className="container">
        <img
          width="130px"
          height="130"
          src="https://www.ilovepdf.com/img/animated-check.gif"
        ></img>
        <p className="semi-bold-text">You have been successfully registered</p>
        <p>Welcome to Pneumoai, Anjali</p>
        <Link to="/UserPage">
          <button className="Registered-button">Start using PneumoAI</button>
        </Link>
      </div>
    </>
  );
};
export default RegisteredPage;
