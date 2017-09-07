import React, { Component } from "react";
import PieChart from "react-svg-piechart";
import styled from "styled-components";

const ColorIndicator = styled.div`
  background: ${props => props.color};
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin: 4px 8px;
`;

const Title = styled.div`
  font-family: "Expletus Sans";
  text-transform: uppercase;
  font-size: 16px;
  margin: 4px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
`;

const SkillChartWrapper = styled.div`
  width: 50vw;
  min-width: 200px;
  text-align: center;
  margin: 16px 32px;
  display: inline-block;
  float: left;
`;

class SkillChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedSector: null
    };
  }

  componentDidMount = () => {
    this.setState({ data: this.props.data });
  };

  handleMouseEnterOnSector = sector => {
    this.setState({ expandedSector: sector });
  };

  render() {
    const { data, title } = this.props;
    return (
      <SkillChartWrapper>
        <Title>{title}</Title>
        <PieChart
          data={data}
          expandedSector={this.state.expandedSector}
          onSectorHover={this.handleMouseEnterOnSector}
          sectorStrokeWidth={4}
          expandOnHover
          shrinkOnTouchEnd
        />
        <LabelWrapper>
          {data.map(({ label, color, value }, i) => (
            <Label key={label}>
              <ColorIndicator color={color} />
              <span
                style={{
                  fontWeight: this.state.expandedSector === i ? "bold" : null
                }}
              >
                {label}
              </span>
            </Label>
          ))}
        </LabelWrapper>
      </SkillChartWrapper>
    );
  }
}

export default SkillChart;

SkillChart.defaultProps = {
  data: []
};
