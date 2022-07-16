import React from "react";
import { authService } from "../../fbase";
import { useNavigate } from "react-router-dom";
import ToDoList from "../todolist/ToDoList";

const Home = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate.push("/");
  };
  return (
    <>
      <ToDoList />
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Home;
