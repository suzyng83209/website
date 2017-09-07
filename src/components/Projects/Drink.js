import React from "react";
import styled from "styled-components";

const coffeeShopPalette = [
  "#f8bcab",
  "#f5d340",
  "#afdb9f",
  "#abe7f8",
  "#79be1f"
];

const generateRandomColor = () => {
  const index = Math.floor(Math.random() * 5);
  return coffeeShopPalette[index];
};

export default ({ imageUrl }) => {
  const cupColor = generateRandomColor();
  const height = window.innerHeight * 0.6;
  const width = height;
  const imageSize = height * 0.4;
  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <svg height={`${height}`} width={`${width}`}>
        <defs>
          <pattern id="image" x="0" y="0" height="100%" width="100%">
            <image
              cx={`${imageSize / 2}`}
              cy={`${imageSize / 2}`}
              height={`${imageSize}`}
              width={`${imageSize}`}
              xlinkHref={`${imageUrl}`}
            />
          </pattern>
        </defs>
        <polygon
          points={`${width / 2 - width * 0.22},${height} ${width / 2 + width * 0.22},${height} ${width / 2 + width * 0.2},${height - 100} ${width / 2 - width * 0.2},${height - 100}`}
          fill="rgba(0, 0, 0, 0.3)"
        />
        <ellipse
          cx={`${width / 2}`}
          cy={`${height - 100}`}
          rx={`${width * 0.2}`}
          ry="15"
          fill={`${cupColor}`}
        />
        <ellipse
          cx={`${width / 2}`}
          cy={`${height - 100}`}
          rx={`${width * 0.2}`}
          ry="15"
          fill="rgba(0, 0, 0, 0.2)"
        />
        <polygon
          points={`${width / 2 - width * 0.2},${height - 100} ${width / 2 + width * 0.2},${height - 100} ${width / 2 + width * 0.28},${60} ${width / 2 - width * 0.28},${60}`}
          fill={`${cupColor}`}
        />
        <circle
          cx={`${width / 2}`}
          cy={`${height / 2}`}
          r={`${imageSize / 2}`}
          fill="url(#image)"
          stroke="white"
          strokeWidth="8"
        />
        <polygon
          points={`${width / 2 - width * 0.2},${height - 100} ${width / 2 + width * 0.2},${height - 100} ${width / 2 + width * 0.28},${60}`}
          fill="rgba(0, 0, 0, 0.2)"
        />
        <ellipse
          cx={`${width / 2}`}
          cy={`${80}`}
          rx={`${width * 0.3}`}
          ry="20"
          fill="#333333"
        />
        <polygon
          points={`${width / 2 - width * 0.3},${80} ${width / 2 + width * 0.3},${80} ${width / 2 + width * 0.3},${60} ${width / 2 - width * 0.3},${60}`}
          fill="#333333"
        />
        <ellipse
          cx={`${width / 2}`}
          cy={`${60}`}
          rx={`${width * 0.3}`}
          ry="20"
          fill="#404040"
        />
        <ellipse
          cx={`${width / 2}`}
          cy={`${60}`}
          rx={`${width * 0.27}`}
          ry="14"
          fill="#333333"
        />
        <polygon
          points={`${width / 2 - width * 0.27},${60} ${width / 2 + width * 0.27},${60} ${width / 2 + width * 0.25},${12} ${width / 2 - width * 0.25},${12}`}
          fill="#333333"
        />
        <ellipse
          cx={`${width / 2}`}
          cy={`${12}`}
          rx={`${width * 0.25}`}
          ry="12"
          fill="#404040"
        />
      </svg>
    </div>
  );
};
