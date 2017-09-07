import React from "react";
import styled from "styled-components";

const ProjectNavWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
`;

const IndexIndicator = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    margin: 12px;
    background: ${props => (props.active ? "white" : "lightgrey")};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);    
`;

const Chevron = styled.div`
    color: white;
    font-size: 48px;
    margin: 0 48px;
    font-weight: 700;
    cursor: pointer;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
`;

export default ({ increase, decrease, index, projects }) => (
  <ProjectNavWrapper>
    <Chevron onClick={decrease}>{"<"}</Chevron>
    <div style={{ display: "flex", margin: "0 24px" }}>
      {projects.map((x, i) => <IndexIndicator active={i === index} key={i} />)}
    </div>
    <Chevron onClick={increase}>{">"}</Chevron>
  </ProjectNavWrapper>
);
