import React from 'react';

const LoginPage = () => {
  return (
    <div className="login-container">
      <h1>PneumoAI</h1>
      <p>Login to your account</p>

      <div className="social-icons">
        <img src="facebook-icon.png" alt="Facebook" />
        <img src="google-icon.png" alt="Google" />
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>

        <p className="forgot-password">Forgot your password?</p>

        <button type="submit">Login</button>
      </form>

      <p className="create-account">Don't have an account? Create an account</p>
    </div>
  );
};

export default LoginPage;
