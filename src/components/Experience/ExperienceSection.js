import React from "react";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";

import ExperienceTimeline from "./ExperienceTimeline";

const ExperienceContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: white;
`;

class ExperienceSection extends React.Component {
  render = () => {
    return (
      <ScrollableAnchor id={"experience"}>
        <ExperienceContainer>
          <ExperienceTimeline />
        </ExperienceContainer>
      </ScrollableAnchor>
    );
  };
}

export default ExperienceSection;
