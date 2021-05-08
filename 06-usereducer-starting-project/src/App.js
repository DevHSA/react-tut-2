import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import {AuthContext} from './context/auth-context'

function App() {
  
  const context = useContext(AuthContext)

  return (
    <>
      <MainHeader/>
      <main>
        {!context.isLoggedIn && <Login onLogin={context.onLogin} />}
        {context.isLoggedIn && <Home onLogout={context.onLogout} />}
      </main>
    </>
  );
}

export default App;
