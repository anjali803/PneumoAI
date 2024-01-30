import { NavLink } from "react-router-dom";
import React from "react";

const RegisteredUserPage = () => {
  return (
    <div className="user-container">
      <header>
        <div className="nav-container">
          <div className="logo">
            <NavLink to="/">PneumoAI</NavLink>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/RegisteredUserPage">icon</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default RegisteredUserPage;
