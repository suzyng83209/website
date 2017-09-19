import React from 'react';
import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';

import { SectionTitle } from '../Common';
import Project from './Project';
import ProjectNavigator from './ProjectNavigator';
import projects from './projects';

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url(assets/images/cafe-background.jpg);
  background-size: 100% auto;
  background-position: center center;
`;

const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
`;

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      index: 0
    };
  }

  componentDidMount = () => {
    this.setState({ loading: false });
  };

  increaseIndex = () => {
    if (this.state.index < projects.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

  decreaseIndex = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: projects.length - 1 });
    }
  };

  render = () => {
    const { loading, index } = this.state;
    return loading ? null : (
      <ScrollableAnchor id={'projects'}>
        <ProjectsContainer>
          <SectionTitle color={'white'} margin={'auto auto 32px'}>
            Projects
          </SectionTitle>
          <ProjectNavigator
            increase={this.increaseIndex}
            decrease={this.decreaseIndex}
            projects={projects}
            index={index}
          />
          <ProjectWrapper>
            {projects.map((project, i) => {
              return i === index && <Project key={i} {...project} />;
            })}
          </ProjectWrapper>
        </ProjectsContainer>
      </ScrollableAnchor>
    );
  };
}

export default ProjectsPage;
