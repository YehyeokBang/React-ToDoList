import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./auth.css";

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signType, setSignType] = useState(0);
  const auth = getAuth();
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (signType === 1) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else if (signType === 2) {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };
  const onPickSignType = (event) => {
    const {
      target: { name },
    } = event;
    if (name === "signup") {
      setSignType(1);
    } else if (name === "signin") {
      setSignType(2);
    }
  };
  return (
    <div className="WelcomeContainer">
      <h2>Welcome</h2>
      <div className="SelectSignTypeBox">
        <button onClick={onPickSignType} name="signup">
          Sign Up
        </button>
        <button onClick={onPickSignType} name="signin">
          Sign In
        </button>
      </div>
      {signType === 1 && <SignUp onChange={onChange} onSubmit={onSubmit} />}
      {signType === 2 && <SignIn onChange={onChange} onSubmit={onSubmit} />}
      {error}
    </div>
  );
};

export default Welcome;
