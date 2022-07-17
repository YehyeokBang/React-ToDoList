import React from "react";
import "./auth.css";

const SignIn = ({ email, password, onChange, onSubmit, onPickSignType }) => {
  return (
    <div className="SignInContainer">
      <h1 onClick={onPickSignType} name="0">
        로그인
      </h1>
      <form onSubmit={onSubmit} className="SignInForm">
        <div className="SignInputBox">
          <div className="SignInput">
            <label>이메일</label>
            <input
              name="email"
              type="text"
              placeholder="이메일 입력..."
              required
              value={email}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="SignInputBox">
          <div className="SignInput">
            <label>비밀번호</label>
            <input
              name="password"
              type="password"
              placeholder="비밀번호 입력..."
              required
              value={password}
              onChange={onChange}
            />
          </div>
        </div>
        <input className="SignSubmitBtn" type="submit" value="로그인" />
      </form>
      <div className="SignQuestion">
        처음이신가요?{" "}
        <a href="#" onClick={onPickSignType} name="signup">
          가입
        </a>
        하세요
      </div>
    </div>
  );
};

export default SignIn;
