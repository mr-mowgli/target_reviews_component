import React from 'react';

const ProgressCircle = (props) => {
  const {
    size,
    progress,
    strokeWidth,
    circleOneStroke,
    circleTwoStroke,
    complete
} = props;

const center = props.size / 2;
const radius = size / 2 - props.strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

const styles= {
  color: 'red'
};

  if (props.complete === 5) {
    return (
      <>
        <svg className="svg-progress" width={size} height={size}>
          <circle
            className="svg-circle"
            stroke={circleTwoStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={0}
          />
          <text id="svg-circle-text" x={25}  y={30} style={styles}>
            100
          </text>

        </svg>
      </>
    )
  }
  if (props.complete === 4) {
    return (
      <>
        <svg className="svg-progress" width={size} height={size}>
          <circle
            className="svg-circle"
            stroke={circleTwoStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference - 10}
            strokeDashoffset={25}
          />
          <text id="svg-circle-text" x={25}  y={30} style={styles}>
            4.5
          </text>

        </svg>
      </>
    )
  }
  if (props.complete === 3) {
    return (
      <>
        <svg className="svg-progress" width={size} height={size}>
          <circle
            className="svg-circle"
            stroke={circleTwoStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference - 5}
            strokeDashoffset={10}
          />
          <text id="svg-circle-text" x={25}  y={30} style={styles}>
            4.8
          </text>

        </svg>
      </>
    )
  }
  if (props.complete === 2) {
    return (
      <>
        <svg className="svg-progress" width={size} height={size}>
          <circle
            className="svg-circle"
            stroke={circleTwoStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={0}
          />
          <text id="svg-circle-text" x={25}  y={30} style={styles}>
            5.0
          </text>

        </svg>
      </>
    )
  }
}

export default ProgressCircle;