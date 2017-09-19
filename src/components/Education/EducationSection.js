import React from 'react';
import School from 'material-ui/svg-icons/social/school';
import { Card, Icon, Row, Col, Collapse } from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';
import education from './education';
import './EducationSection.css';
const Panel = Collapse.Panel;

export default () => (
  <ScrollableAnchor id={'education'}>
    <section style={{ width: '100vw' }}>
      <Row style={{ fontFamily: 'Bungee Shade', fontSize: '4em', margin: '2em' }}>Education</Row>
      <Row gutter={32} type="flex" justify="center">
        <Col sm={8}>
          <Card
            title={
              <div style={{ width: '100%' }}>
                Dr. E. P. Scarlett High School
                <span style={{ float: 'right' }}>SEP 2013 - JUN 2016</span>
              </div>
            }
            className="education-card"
          >
            <Row>
              <Icon type="star-o" /> Average: <span style={{ float: 'right' }}>97%</span>
            </Row>
            <Row>&nbsp;</Row>
            <Row>
              <Icon type="trophy" /> Awards:
            </Row>
            <Row>
              <Collapse bordered={false} defaultActiveKey={['1']} accordion>
                <Panel header="Queen's Golden Jubilee Citizenship Medal" key="1">
                  <p>{education["Queen's"]}</p>
                </Panel>
                <Panel header="Premiere's Citizenship Award" key="2">
                  <p>{education["Premiere's"]}</p>
                </Panel>
                <Panel header="Loran Scholar -- Nominee" key="5">
                  <p>{education['Loran']}</p>
                </Panel>
                <Panel header="Schulich Leader -- Nominee" key="6">
                  <p>{education['Schulich']}</p>
                </Panel>
              </Collapse>
            </Row>
          </Card>
        </Col>
        <Col sm={8}>
          <Card
            title={
              <div style={{ width: '100%' }}>
                University of Waterloo
                <span style={{ float: 'right' }}>SEP 2013 - JUN 2016</span>
              </div>
            }
            className="education-card"
          >
            <Row style={{ marginBottom: '5%' }} type="flex">
              <span style={{ display: 'flex' }}>
                <School
                  style={{ height: '16px', width: '16px', marginRight: '4px', marginLeft: '-1px' }}
                />
                <p>
                  Candidate for Honours Bachelor of Applied Science in Electrical/Computer
                  Engineering.
                </p>
              </span>
            </Row>
            <Row>
              <Icon type="star-o" /> Average: <span style={{ float: 'right' }}>91%</span>
            </Row>
            <Row>&nbsp;</Row>
            <Row>&nbsp;</Row>
            <Row>
              <Icon type="trophy" /> Awards:
            </Row>
            <Row>
              <Collapse bordered={false} defaultActiveKey={['1']} accordion>
                <Panel header="President's Scholarship of Distinction" key="1">
                  <p>{education['Entrance']}</p>
                </Panel>
                <Panel header="Hatch Entrance Scholarship" key="2">
                  <p>{education['Hatch']}</p>
                </Panel>
              </Collapse>
            </Row>
          </Card>
        </Col>
      </Row>
    </section>
  </ScrollableAnchor>
);
