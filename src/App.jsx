import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <main className="main">
      <Home></Home>
      <Services></Services>
      <Skills/>
    </main>
  );
}

export default App;
