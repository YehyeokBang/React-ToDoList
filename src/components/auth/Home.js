import React, { useState } from "react";
import { authService } from "../../fbase";
import { useNavigate } from "react-router-dom";
import ToDoList from "../todolist/ToDoList";
import "./auth.css";
import NavBar from "../NavBar/NavBar";
import EditProfile from "./EditProfile";

const Home = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    authService.signOut();
    navigate.push("/");
  };
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const onSetPage = (event) => {
    const {
      target: { name },
    } = event;
    if (name === "1") {
      setPage(1);
    } else if (name === "2") {
      setPage(2);
    }
  };
  return (
    <div className="Home">
      <NavBar onLogOutClick={onLogOutClick} onSetPage={onSetPage} />
      {page === 1 && <ToDoList />}
      {page === 2 && <EditProfile />}
    </div>
  );
};

export default Home;
