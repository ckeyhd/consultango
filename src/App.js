import React, { useState, useEffect } from "react";
import { Login } from "./components/login/Login";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {

  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(" ")

  useEffect(() => {
    if(localStorage.getItem("logged") === "yes"){
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if(userInfo){
        setUser(userInfo)
      }else{
        setLogged(false)
      }
      setLogged(true)
    }else{
      localStorage.clear();
      setLogged(false)
    }
  },[logged])

  const logout = () =>{
    setLogged(false)
    localStorage.removeItem("logged")
    localStorage.removeItem("authCode")
  }

  return (
    <div className="App">
      {(logged) ? <Dashboard userInfo= { user } disconect = { logout }/> : <Login />}
    </div>
  );
}

export { App };
