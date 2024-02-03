import { NavLink } from "react-router-dom";
import "../App.css";
import { HiMiniUser } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav-container">
          <div className="logo">
            <NavLink to="/">PneumoAI</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/RegisteredUserPage">
                  <HiMiniUser />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Navbar;
