import * as React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  guage: {},
  symbol: {
    overflow: "visible",
  },
  area: {
    fill: "none",
    strokeWidth: "15",
  },
  stroke: {
    fill: "none",
    stroke: "#333",
    strokeWidth: "2",
    strokeLinejoin: "round",
  },
  obliqueSquare: {
    background:
      "repeating-linear-gradient(45deg, rgb(51, 51, 51), rgb(51, 51, 51) 1px, rgb(255, 255, 255) 1px, rgb(255, 255, 255) 3px) 0% 0% / 28px",
    width: "6px",
    border: "2px solid #333",
    height: "6px",
  },
  use: {
    transform: ({ obliqueValue, max, min }) =>
      `rotate(calc(45deg + ${obliqueValue / (max - min)} * 270deg))`,
  },
});

const ObliqueGauge = ({
  max,
  min,
  width,
  height,
  strokeValue,
  obliqueValue,
  part1,
  part2,
  part3
}) => {
  const props = {
    strokeValue,
    obliqueValue,
    width,
    height,
    max,
    min,
    part1,
    part2,
    part3
  };
  const classes = useStyles(props);

  return (
    <svg
      viewBox="-60 -60 120 120"
      className={classes.guage}
      width={width}
      height={height}
    >
      <symbol className={classes.symbol} id="limit">
        <path d="M 0,41 V 54" />
      </symbol>
      <pattern id="hatch" patternUnits="userSpaceOnUse" width="12" height="12">
        <path
          className={classes.stroke}
          d="M -2,-6 18,4 M -2,0 18,10 M -2,6 18,16"
        />
      </pattern>
      {/* data areas in reverse order  */}
      <path
        id="area-2"
        stroke="url(#hatch)"
        strokeDasharray={`calc(${obliqueValue / (max - min)} * 100px) 100px`}
        className={classes.area}
        d="M -33.588,33.587 A 47.5,47.5 0 1 1 33.588,33.588"
        pathLength="100"
      />
      <path
        id="area-1"
        stroke="#333"
        strokeDasharray={`calc(${strokeValue / (max - min)} * 100px) 100px`}
        className={classes.area}
        d="M -33.588,33.587 A 47.5,47.5 0 1 1 33.588,33.588"
        pathLength="100"
      />
      <rect x="-15%" y="-15%" width="10" height="10" fill="#333" />
      <foreignObject
        className="gauge-font"
        x="-3%"
        y="-27.5%"
        width="260px"
        height="100px"
      >
        <p>{part1}</p>
      </foreignObject>
      <rect
        x="-14%"
        y="0%"
        width="8"
        height="8"
        fill="white"
        stroke="#333"
        strokeWidth="2"
      />
      <foreignObject
        className="gauge-font"
        x="-3%"
        y="-13.5%"
        width="260px"
        height="100px"
      >
        <p>{part2}</p>
      </foreignObject>
      <foreignObject
        className="gauge-font"
        x="-15%"
        y="3%"
        width="30"
        height="30"
      >
        <p className={classes.obliqueSquare}></p>
      </foreignObject>
      <foreignObject
        className="gauge-font"
        x="-3%"
        y="0.5%"
        width="260px"
        height="100px"
      >
        <p>{part3}</p>
      </foreignObject>
      <g className={classes.stroke}>
        {/* static outer border  */}
        <path d="M -38.184,38.184 A 54,54 0 1 1 38.184,38.184 L 28.991,28.991 A 41,41 0 1 0 -28.991,28.991 Z" />
        {/* bisecting data lines, cited from a template  */}
        <use
          className={classes.use}
          style={{
            transform: `rotate(calc(45deg + ${
              obliqueValue / (max - min)
            } * 270deg))`,
          }}
          href="#limit"
        />
      </g>
    </svg>
  );
};

ObliqueGauge.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  strokeValue: PropTypes.number,
  obliqueValue: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default ObliqueGauge;
