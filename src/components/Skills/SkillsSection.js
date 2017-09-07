import React from "react";
import styled from "styled-components";
import ScrollableAnchor from "react-scrollable-anchor";

import SkillChart from "./SkillChart";
import SkillsTooltip from './SkillsTooltip';
import { SectionTitle } from "../Common";

const SkillsContainer = styled.section`
    display: flex;
    height: 100vh;
    width: 100%;
    background: lightgrey;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const SkillsWrapper = styled.div`
    width: 60%;
    align-items: baseline;
    margin: 0 auto 5%;
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    background: white;
    border: 16px solid white;
    border-radius: 8px;
`;

class SkillsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount = () => {
    this.setState({ loading: false });
  };

  render = () => {
    return this.state.loading
      ? null
      : <ScrollableAnchor id={"skills"}>
          <SkillsContainer>
            <SectionTitle color={"black"} margin={"5% auto"}>
              Skills
              <SkillsTooltip />
            </SectionTitle>
            <SkillsWrapper>
              <SkillChart
                data={[
                  { label: "Javascript", value: 100, color: "#FFE8D1" },
                  { label: "ReactJS", value: 90, color: "#FFBDD1" },
                  { label: "Redux", value: 80, color: "#99E8FF" },
                  { label: "SCSS/CSS", value: 90, color: "#70492B" },
                  { label: "HTML", value: 65, color: "#8E5CC4" }
                ]}
                title="Front-end"
              />
              <SkillChart
                data={[
                  { label: "Python", value: 30, color: "#D36900" },
                  { label: "C++", value: 25, color: "#D18A8D" },
                  { label: "Java", value: 75, color: "#B6A5CC" },
                  { label: "NodeJS", value: 100, color: "#CCB9C8" }
                ]}
                title="Back-end"
              />
              <SkillChart
                data={[
                  { label: "React Native", value: 50, color: "#F2837B" },
                  { label: "Android Studio", value: 40, color: "#E3EFDE" }
                ]}
                title="Mobile"
              />
              <SkillChart
                data={[
                  { label: "Postgres", value: 100, color: "#DDC7DD" },
                  { label: "Firebase", value: 60, color: "#EA7792" }
                ]}
                title="Database"
              />
              <SkillChart
                data={[
                  { label: "Docker", value: 30, color: "#CCE0FF" },
                  { label: "AWS", value: 40, color: "#FFDBE6" },
                  { label: "Heroku", value: 100, color: "#C290DB" }
                ]}
                title="Platform"
              />
              <SkillChart
                data={[
                  { label: "Git", value: 100, color: "#34283F" },
                  { label: "SVN", value: 60, color: "#BBBAEF" }
                ]}
                title="VCS"
              />
            </SkillsWrapper>
          </SkillsContainer>
        </ScrollableAnchor>;
  };
}

export default SkillsPage;
