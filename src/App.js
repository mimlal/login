import Home from "./component/home/Home"
import Login from "./component/login/Login"
import Register from "./component/register/Register"
import "./App.css"
import { useState } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [user,setLoginUser]=useState({});
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
      
    </div>
  );
}

export default App;
