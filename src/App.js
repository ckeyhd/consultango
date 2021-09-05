import React, { useState, useEffect } from "react";
import { Login } from "./components/login/Login";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {

  const [logged, setLogged] = useState(false)
  const [idUserLogged, setIdUserLogged] = useState(" ")

  useEffect(() => {
    if(localStorage.getItem("logged") === "yes"){
      setIdUserLogged(Number(localStorage.getItem("clientID")))
      setLogged(true)
    }else{
      localStorage.clear();
      setLogged(false)
    }
  },[idUserLogged])

  const logout = () =>{
    setLogged(false)
    localStorage.removeItem("logged")
    localStorage.removeItem("authCode")
  }

  return (
    <div className="App">
      {(logged) ? <Dashboard clientID= { idUserLogged } disconect = { logout }/> : <Login />}
    </div>
  );
}

export default App;
