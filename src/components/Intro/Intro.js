import React from "react";
import styled, { keyframes } from "styled-components";

import StirringCup from "./StirringCup";
import Typewriter from "./Typewriter";
import "./Intro.css";

const strikethrough = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const StrikeText = styled.span`
  position: ${props => (props.animate ? "relative" : "none")};
  &:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => (props.animate ? "black" : "transparent")};
    animation: ${strikethrough} 0.5s 2s ease-in-out forwards;
  }
`;

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ animate: true }), 2500);
  };

  render = () => {
    return (
      <div className="Intro">
        <StirringCup />
        <div className="Intro_Text">
          <div className="Text">
            Welcome to <br />
            Susan's{" "}
            <StrikeText animate={this.state.animate}>
              website
            </StrikeText>
            <br />
            <Typewriter phrase="COFFEEHOUSE." time={200} />
          </div>
          <div className="Text">
            Enjoy!
          </div>
        </div>
      </div>
    );
  };
}

export default Intro;
