import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forget from "./Forget";
import Home from "./Home";
import ResetForm from "./ResetForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/forget" element={<Forget />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/reset" element={<ResetForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
