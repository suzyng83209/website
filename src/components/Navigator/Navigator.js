import React from "react";
import styled, { keyframes } from "styled-components";

import Contact from './Contact';

const enter = keyframes`
  0% {
      transform: translateX(60vw);
  }
  90% {
      transform: translateX(60vw);
  }
  100% {
      transform: translateX(200px);
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto 0;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding: 24px;
  height: 75vh;
  width: 60vw;
  max-width: 360px;
  background: #404040;
  color: white;
  transform: translateX(200px)};
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  z-index: 100;
  transition: transform 150ms ease-in-out;
  animation: ${enter} 7s cubic-bezier(.22, .95, .26, 1);  

  &:hover {
    transform: none;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

class Navigator extends React.Component {
  render = () => (
    <MenuContainer ref={r => this.navbar = r}>
      <h2>Menu</h2>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#about">Origin Story</a>
      <Contact />
    </MenuContainer>
  );
}

export default Navigator;
