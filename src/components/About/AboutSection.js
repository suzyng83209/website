import React from 'react';
import { Row, Card } from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';
import "./AboutSection.css";

const title = (
  <Row style={{ fontFamily: 'Bungee Shade', fontSize: '4em', margin: '2em' }}>Origins</Row>
);

export default () => (
  <ScrollableAnchor id={'about'}>
    <section style={{ width: '900px' }}>
      {title}
      <Card>
        <Row type="flex" justify="left" className="about">
          <p>
            Born in Shiyan, China and immigrated at the young age of 4 to Vancouver, BC, Canada
            before moving to Calgary, AB, Canada 2 years later for the next 12 years. During that
            time, I was able to find interesting activities such as Snowboarding, Skiing, and Hiking
            in the Rocky Mountains in Banff, playing badminton, learning classical piano, and
            volunteering through a local youth volunteer database.
          </p>
          <p>
            At the age of 14 until the age of 18, I was able to spend my free time signing up for
            volunteering at community events, senior homes, wildlife preservation centers, summer
            camps, and more. I would later become a full-time seasonal Team Leader at this
            organization and guide younger volunteers as I was guided. At school, I focused on
            managing clubs as executive or founding members and attempted to start an academic aid
            program. In the meantime, Junior Achievement kept me busy with managing a small company
            of 20 students to produce a profitable business.
          </p>
          <p>
            At school, I focused on managing clubs as executive or founding members and attempted to
            start an academic aid program. In the meantime, Junior Achievement kept me busy with
            managing a small company of 20 students to produce a profitable business.
          </p>
        </Row>
      </Card>
    </section>
  </ScrollableAnchor>
);
