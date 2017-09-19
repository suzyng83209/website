import React from 'react';
import { Timeline, Icon } from 'antd';

class ExperienceTimeline extends React.Component {
  render = () => {
    return (
      <Timeline
        style={{
          textAlign: 'left',
          fontSize: '24px !important'
        }}
      >
        <Timeline.Item color="lightpink" dot={<Icon type="user" />}>
          Birth 1998-02-28
        </Timeline.Item>
        <Timeline.Item color="green">High School Graduation 2016-06-30</Timeline.Item>
        <Timeline.Item color="green">
          <p>Study Term #1: 1A 2016-09-04</p>
          <p>Studied Fundamentals of Programming in C++, Linear Circuits, Physics, and Calculus.</p>
        </Timeline.Item>
        <Timeline.Item color="blue" dot={<Icon type="code" />}>
          <p>Co-op #1: Robin -- Full Stack Web Developer 2017-01-04</p>
          <p>Led front-end implementations of APIs onto the platform such as Stripe and Spotify.</p>
          <p>
            Developed a more automated transaction process to reduce employee customer service
            burden and time by 50%.
          </p>
          <p>
            Developed globally accessible search to present more interactable content to anonymous
            users which increased turn-over rates.
          </p>
          <p>
            Created database migrations and developed new API endpoints to more efficiently collect
            and analyse user and product data.
          </p>
          <p>
            Consulted in UI/UX and business decisions to help create a more unified sense of design
            and product.
          </p>
        </Timeline.Item>
        <Timeline.Item color="green">
          <p>Study Term #2: 1B 2017-04-01</p>
          <p>
            Studied Embedded Systems Programming with Android Studio, Digital Circuits with VHDL
            Programming, Physics, Calculus, and Discrete Maths.
          </p>
        </Timeline.Item>
        <Timeline.Item color="blue" dot={<Icon type="code" />}>
          <b>
            <p>Co-op #2: Pippa.io -- Full Stack Web Developer 2017-09-01</p>
            <i>In Progress</i>
          </b>
        </Timeline.Item>
        <Timeline.Item color="green">
          <i>Study Term #3: 2A 2018-01-04</i>
        </Timeline.Item>
        <Timeline.Item color="blue" dot={<Icon type="code" />}>
          <i>Co-op #3: TBA 2018-04-01</i>
        </Timeline.Item>
        <Timeline.Item color="green">
          <i>Study Term #4: 2B 2018-09-04</i>
        </Timeline.Item>
        <Timeline.Item color="blue" dot={<Icon type="code" />}>
          <i>Co-op #4: TBA 2019-01-01</i>
        </Timeline.Item>
        <Timeline.Item color="green">
          <i>Study Term #5: 3A 2019-04-01</i>
        </Timeline.Item>
        <Timeline.Item color="blue" dot={<Icon type="code" />}>
          <i>Co-op #5: TBA 2019-09-01</i>
        </Timeline.Item>
        <Timeline.Item color="green">
          <i>Study Term #6: 3B 2020-01-04</i>
        </Timeline.Item>
        <Timeline.Item color="green">
          <i>Study Term #7: 4A 2020-04-04</i>
        </Timeline.Item>
        <Timeline.Item color="blue" dot={<Icon type="code" />}>
          <i>Co-op #6: TBA 2020-09-01</i>
        </Timeline.Item>
        <Timeline.Item color="green">
          <i>Study Term #8: 4B 2021-04-04</i>
        </Timeline.Item>
        <Timeline.Item color="green">
          <i>Expected Graduation Date 2021-04-30</i>
        </Timeline.Item>
      </Timeline>
    );
  };
}

export default ExperienceTimeline;
