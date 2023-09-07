import "./App.css";
import React from "react";
import Nav from "./components/Pages/Nav";
import Login from "./components/Pages/login";
import Registration from "./components/Pages/registrarion";
import Reset from "./components/Pages/reset";

function App() {
  return (
    <>
      <Nav></Nav>
      <Login />
      <Registration />
      <Reset />
    </>
  );
}

export default App;
