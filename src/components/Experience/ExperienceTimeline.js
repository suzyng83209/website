import React from "react";
import { Timeline } from "antd";

class ExperienceTimeline extends React.Component {
  render = () => {
    return (
      <Timeline style={{ textAlign: "left" }}>
        <Timeline.Item color="lightpink">maybe a card</Timeline.Item>
        <Timeline.Item color="green">hackathon!</Timeline.Item>
      </Timeline>
    );
  };
}

export default ExperienceTimeline;
