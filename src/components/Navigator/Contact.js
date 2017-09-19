import React from 'react';
import { Col, Row, Icon } from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor';

export default () => <a href="#contact">Contact Info</a>;

export const ContactInfo = () => (
  <ScrollableAnchor id={'contact'}>
    <section style={{ width: '100vw' }}>
      <Row style={{ fontFamily: 'Bungee Shade', fontSize: '4em', margin: '4em 2em 2em' }}>Contact</Row>
      <Row gutter={16} type="flex" justify="center" style={{ fontSize: '14px' }}>
        <Col sm={3}>
          <Icon type="mail" /> <a href="mailto:c425li@edu.uwaterloo.ca">c425li@uwaterloo.ca</a>
        </Col>
        <Col sm={3}>
          <Icon type="phone" /> <a href="tel:1-929-273-9691">+1 (929) 273 9691</a>
        </Col>
        <Col sm={3}>
          <Icon type="github" /> <a href="https://github.com/suzyng83209">@Suzyng83209</a>
        </Col>
        <Col sm={3}>
          <img src="assets/images/linkedin-logo.png" alt="Linked In" width="14px" />{' '}
          <a href="https://linkedin.com/in/susancqli">@susancqli</a>
        </Col>
        <Col sm={3}>
          <img src="assets/images/facebook-3.svg" alt="Facebook" width="14px" />{' '}
          <a href="https://www.facebook.com/chuqian.susan.li">Chuqian Susan li</a>
        </Col>
      </Row>
    </section>
  </ScrollableAnchor>
);
