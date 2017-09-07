import React from "react";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";

import { SectionTitle } from "../Common";
import Project from "./Project";
import ProjectNavigator from "./ProjectNavigator";

const ProjectsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    height: max-content;
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

  projects = [
    {
      title: "Project 1",
      demoUrl: "some-url",
      imageUrl: "assets/images/sylvie.jpg",
      githubUrl: "githubbbb",
      description: "some description",
      languages: ["python", "javascript", "etc"]
    },
    {
      title: "Project 2",
      demoUrl: "some-url",
      imageUrl: "assets/images/cafe-background.jpg",
      githubUrl: "githubbbb",
      description: "some description",
      languages: ["python", "javascript", "etc"]
    }
  ];

  componentDidMount = () => {
    this.setState({ loading: false });
  };

  increaseIndex = () => {
    if (this.state.index < this.projects.length - 1) {
      this.setState({ index: this.state.index + 1 });
    } else {
      this.setState({ index: 0 });
    }
  };

  decreaseIndex = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
    } else {
      this.setState({ index: this.projects.length });
    }
  };

  render = () => {
    const { loading, index } = this.state;
    return loading
      ? null
      : <ScrollableAnchor id={"projects"}>
          <ProjectsContainer>
            <SectionTitle color={"white"} margin={"auto auto 32px"}>
              Projects
            </SectionTitle>
            <ProjectNavigator
              increase={this.increaseIndex}
              decrease={this.decreaseIndex}
              projects={this.projects}
              index={index}
            />
            <ProjectWrapper>
              {this.projects.map(({
                title,
                description,
                githubUrl,
                languages
              }, i) => {
                return (
                  i === index &&
                  <Project
                    key={i}
                    title={title}
                    description={description}
                    languages={languages}
                    imageUrl="assets/images/sylvie.jpg"
                  />
                );
              })}
            </ProjectWrapper>
          </ProjectsContainer>
        </ScrollableAnchor>;
  };
}

export default ProjectsPage;
