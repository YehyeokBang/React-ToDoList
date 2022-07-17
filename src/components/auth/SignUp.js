import React from "react";
import "./auth.css";

const SignUp = ({ email, password, onChange, onSubmit, onPickSignType }) => {
  return (
    <div className="SignUpContainer">
      <h1 onClick={onPickSignType} name="0">
        가입
      </h1>
      <form onSubmit={onSubmit} className="SignUpForm">
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
        <input className="SignSubmitBtn" type="submit" value="이메일로 가입" />
      </form>
      <div className="SignQuestion">
        이미 회원이신가요?{" "}
        <a href="#" onClick={onPickSignType} name="signin">
          로그인
        </a>
        하세요
      </div>
    </div>
  );
};

export default SignUp;
