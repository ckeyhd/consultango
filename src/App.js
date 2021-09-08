import React, { useState, useEffect } from "react";
import { Login } from "./components/login/Login";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {

  const [logged, setLogged] = useState(false)
  const [user, setUser] = useState(" ")

  useEffect(() => {
    let isSubscribed = true;
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
    console.log("cambió el estado");
    return () => (isSubscribed = false)
  },[logged])

  const logout = () =>{
    console.log("di click para hacer logout");
    setLogged(false)
    localStorage.removeItem("logged")
    localStorage.removeItem("authCode")
  }

  return (
    <div className="App">
      {(logged)
      ? <Dashboard userInfo= { user } disconect = { logout } logged={ logged }/>
      : <Login logged={ logged } setLogged = { setLogged } disconect = { logout }/>}
    </div>
  );
}

export { App };
