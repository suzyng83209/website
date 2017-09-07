import React, { Component } from "react";
import Intro from "./components/Intro/Intro";
import Navigator from "./components/Navigator/Navigator";
import SkillsSection from "./components/Skills/SkillsSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
// import Location from "./components/About/Location";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigator />
        <Intro />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        {/* <Location /> */}
      </div>
    );
  }
}

export default App;
