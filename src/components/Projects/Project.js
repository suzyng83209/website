import React from "react";
import styled from "styled-components";
import CoffeeCup from "./Drink";

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
    padding: 16px;
    margin-bottom: 100px;
`;

export default ({ title, description, languages = [], imageUrl }) => {
  return (
    <ProjectContainer>
      <CoffeeCup imageUrl={imageUrl} />
      <Description>
        <h2>{title}</h2><p>{description}</p><p>{languages.join(", ")}</p>
      </Description>
    </ProjectContainer>
  );
};
