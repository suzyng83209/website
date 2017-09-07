import React from "react";
import styled from "styled-components";

export const SectionTitle = styled.div`
    text-transform: uppercase;
    text-shadow: ${props => (props.color === "white" ? "0 2px 8px rgba(0, 0, 0, 0.3)" : "none")};
    color: ${props => props.color};
    font-size: 36px;
    margin: ${props => props.margin};
    font-family: "Bungee Shade";
    display: flex;
    align-items: center;
`;

SectionTitle.defaultProps = {
  color: "black",
  margin: "auto"
};
