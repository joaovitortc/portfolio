import React from "react";
import GridPattern from "./components/GridPattern.tsx";
import NavBar from "./components/NavBar.tsx";
import Welcome from "./components/Welcome.tsx";
import Border from "./components/Border.tsx";
import ScrollDown from "./components/ScrollDown.tsx";
import Stars from "./components/Stars.tsx";
import AboutMe from "./components/AboutMe.tsx";
import "./index.css";

function App() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <NavBar />
      <GridPattern />

      <Welcome />
      <ScrollDown />
      <Border />

      <div id="stars-container" className="relative">
        <Stars />
        <AboutMe />
        <Border/>
      </div>
    
    </div>
  );
}

export default App;
