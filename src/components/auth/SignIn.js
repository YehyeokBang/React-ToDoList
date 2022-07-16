import React from "react";
import "./auth.css";

const SignIn = ({ email, password, onChange, onSubmit }) => {
  return (
    <div className="SignInContainer">
      <span>Sign In</span>
      <form onSubmit={onSubmit} className="SignInForm">
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
