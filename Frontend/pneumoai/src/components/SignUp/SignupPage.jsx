import React from 'react';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <h1>PneumoAI</h1>
      <p>Create a new account</p>

      <div className="social-icons">
        <img src="facebook-icon.png" alt="Facebook" />
        <img src="google-icon.png" alt="Google" />
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>

        <button type="submit">Signup</button>
      </form>

      <p className="login-text">Already a member? <a href="/login">Login</a></p>
    </div>
  );
};

export default SignupPage;
