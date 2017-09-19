import React, { Component } from 'react';
import Intro from './components/Intro/Intro';
import Navigator from './components/Navigator/Navigator';
import SkillsSection from './components/Skills/SkillsSection';
import ProjectsSection from './components/Projects/ProjectsSection';
import ExperienceSection from './components/Experience/ExperienceSection';
import EducationSection from './components/Education/EducationSection';
import AboutSection from './components/About/AboutSection';
import { ContactInfo } from './components/Navigator/Contact';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Location from "./components/About/Location";

import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navigator />
          <Intro />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <AboutSection />
          <ContactInfo />
          {/* <Location /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
