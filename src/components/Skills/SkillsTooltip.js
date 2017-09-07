import React from "react";
import styled from "styled-components";
import { Glyphicon, OverlayTrigger, Tooltip } from "react-bootstrap";

import "./SkillsTooltip.css";

const IconWrapper = styled.div`
    margin: -20px 8px 0;
    display: flex;
    align-items: flex-start;
    span {
    font-size: 20px;
    }
`;

const tooltip = (
  <Tooltip id="tooltip" bsClass="Skills tooltip">
    <div style={{ marginTop: "4px", fontSize: "16px" }}>Why piecharts?</div>
    <p>
      Rather than using an arbitrary ranking system for the languages I use,
      I compare them in terms of my ability to use them relative to each other.
    </p>
  </Tooltip>
);

export default () => (
  <OverlayTrigger placement="right" overlay={tooltip}>
    <IconWrapper><Glyphicon glyph="question-sign" /></IconWrapper>
  </OverlayTrigger>
);
