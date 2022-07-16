import React from "react";
import "./auth.css";

const SignUp = ({ email, password, onChange, onSubmit }) => {
  return (
    <div className="SignUpContainer">
      <span>Create Account</span>
      <form onSubmit={onSubmit} className="SignUpForm">
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
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
};

export default SignUp;
