import { React, useEffect, useState } from "react";
import { authService } from "./fbase";
import AppRouter from "./Router";
import "./style.css";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
    </div>
  );
}

export default App;
