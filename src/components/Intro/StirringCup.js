import React from "react";
import styled from "styled-components";

import "./StirringCup.css";

const Stick = styled.div`
  background: linear-gradient(black, black 49%, transparent 51%, transparent);
  height: 500px;
  width: 20px;
  border-radius: 0;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9;
  transform: rotate(${props => props.angle}deg);
`;

class StirringCup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centerX: 0,
      centerY: 0,
      angle: 45
    };
  }

  updateCenter = () => {
    this.setState({
      centerX: window.innerWidth / 2,
      centerY: window.innerHeight / 2
    });
  };

  calculateReferenceAngle = n => {
    const radian = Math.atan(Math.abs(n));
    return radian / Math.PI * 180;
  };

  calculateAngle = (dX, dY) => {
    const referenceAngle = this.calculateReferenceAngle(dX / dY);
    if (dX > 0) {
      return dY < 0 ? referenceAngle : 180 - referenceAngle;
    }
    return dY < 0 ? 360 - referenceAngle : 180 + referenceAngle;
  };

  onMouseMove = e => {
    const { centerX, centerY } = this.state;
    const dX = e.clientX - centerX;
    const dY = e.clientY - centerY;
    const angle = this.calculateAngle(dX, dY);
    this.setState({ angle });
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateCenter);
  };

  componentWillMount = () => {
    this.updateCenter();
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateCenter);
  };

  render = () => (
    <div className="Container" onMouseMove={this.onMouseMove}>
      <div className="Cup" />
      <div className="Handle" />
      <div className="Coffee_back" />
      <Stick angle={this.state.angle} />
      <div className="Coffee_fore" />
      <div className="Cup_Shadow first" />
    </div>
  );
}

export default StirringCup;
