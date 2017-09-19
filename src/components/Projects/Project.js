import React from 'react';
import styled from 'styled-components';
import { Icon, Tag } from 'antd';
import CoffeeCup from './Drink';
import { languageColors } from './projects';

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  min-width: 320px;
  max-width: 640px;
  text-align: left;
  background: rgba(255, 255, 255, 0.65);
  border-radius: 8px;
  padding: 28px;
  margin-bottom: 100px;
  p,
  a {
    font-size: 16px;
    color: #292929;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: none;
  color: #292929;
`;

export default ({ title, description, languages = [], imageUrl, demoUrl, githubUrl }) => {
  return (
    <ProjectContainer>
      <CoffeeCup imageUrl={imageUrl} />
      <Description>
        <h2>{title}</h2>
        <LinkContainer>
          {demoUrl && (
            <a href={`${demoUrl}`} target="_black" rel="noopener noreferrer">
              <Icon type="chrome" /> {demoUrl}
            </a>
          )}
          {githubUrl && (
            <a href={`${githubUrl}`} target="_blank" rel="noopener noreferrer">
              <Icon type="github" /> {githubUrl}
            </a>
          )}
        </LinkContainer>
        <p>{description}</p>
        <span>
          {languages.map(language => <Tag color={`${languageColors[language]}`}>{language}</Tag>)}
        </span>
      </Description>
    </ProjectContainer>
  );
};
