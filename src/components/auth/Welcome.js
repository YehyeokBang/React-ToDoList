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
    } else {
      setSignType(0);
    }
  };
  return (
    <div className="div_flex_center">
      <div className="WelcomeContainer">
        {signType === 0 && (
          <>
            <h2>Welcome</h2>
            <div className="SelectSignTypeBox">
              <button
                onClick={onPickSignType}
                name="signin"
                className="SignBtn1"
              >
                로그인
              </button>
              <button
                onClick={onPickSignType}
                name="signup"
                className="SignBtn2"
              >
                회원가입
              </button>
            </div>
          </>
        )}
        {signType === 1 && (
          <SignUp
            onChange={onChange}
            onSubmit={onSubmit}
            onPickSignType={onPickSignType}
          />
        )}
        {signType === 2 && (
          <SignIn
            onChange={onChange}
            onSubmit={onSubmit}
            onPickSignType={onPickSignType}
          />
        )}
        {error}
      </div>
    </div>
  );
};

export default Welcome;
