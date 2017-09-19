import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import ExperienceTimeline from './ExperienceTimeline';

const ExperienceContainer = styled.section`
  display: flex;
  width: 100vw;
  height: auto;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: white;
`;

class ExperienceSection extends React.Component {
  render = () => {
    return (
      <ScrollableAnchor id={'experience'}>
        <ExperienceContainer>
          <h1 style={{ fontFamily: 'bungee shade', margin: '5%', fontSize: '3.2em' }}>
            History
          </h1>
          <ExperienceTimeline />
        </ExperienceContainer>
      </ScrollableAnchor>
    );
  };
}

export default ExperienceSection;
