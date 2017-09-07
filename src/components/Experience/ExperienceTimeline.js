import React from "react";
import { Timeline, Icon } from "antd";

class ExperienceTimeline extends React.Component {
  render = () => {
    return (
      <Timeline style={{ textAlign: "left" }}>
        <Timeline.Item color="lightpink">maybe a card</Timeline.Item>
        <Timeline.Item color="green">hackathon!</Timeline.Item>
        <Timeline.Item
          color="green"
          dot={<Icon type="coffee" style={{ fontSize: "20px" }} />}
        >
          hackathon!
        </Timeline.Item>
      </Timeline>
    );
  };
}

export default ExperienceTimeline;
