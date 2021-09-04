import React, { useState, useEffect } from "react";
import { Login } from "./components/login/Login";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {

  const [logged, setLogged] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("logged") === "yes"){
      setLogged(true)
    }else{
      setLogged(false)
    }
  },[])

  const logout = () =>{
    setLogged(false)
    localStorage.removeItem("logged")
    localStorage.removeItem("authCode")
  }

  return (
    <div className="App">
      {(logged) ? <Dashboard disconect = { logout }/> : <Login status={ logged } disconect = { logout }/>}
    </div>
  );
}

export default App;
