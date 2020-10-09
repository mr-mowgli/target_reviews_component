import React from 'react';

const ProgressCircle = (props) => {
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
} = props;

const center = props.size / 2;
const radius = size / 2 - props.strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

const styles= {
  color: 'red'
};


  return (
    <>
      <svg className="svg-progress" width={size} height={size}>
        {/* <circle
          className="svg-circle-bg"
          stroke={circleOneStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        /> */}
        <circle
          className="svg-circle"
          stroke={circleTwoStroke}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
        />
        <text id="svg-circle-text" x={25}  y={30} style={styles}>
          100
        </text>

      </svg>
    </>
  )

}

export default ProgressCircle;