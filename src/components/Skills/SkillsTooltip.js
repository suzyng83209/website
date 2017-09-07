import React from "react";
import styled from "styled-components";
import { Tooltip, Icon } from "antd";

import "./SkillsTooltip.css";

const tooltipText = (
  <div>
    <div style={{ marginTop: "4px", fontSize: "16px" }}>Why piecharts?</div>
    <p>
      Rather than using an arbitrary ranking system for the languages I use, I
      compare them in terms of my ability to use them relative to each other.
    </p>
  </div>
);

export default () => (
  <Tooltip placement="right" title={tooltipText}>
    <Icon type="question-circle" className="Help" />
  </Tooltip>
);
