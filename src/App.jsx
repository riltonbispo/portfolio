import React from "react";
import "./App.css";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
    </main>
  );
}

export default App;
