import React from 'react';
import { Button, FourStars, } from '../Styling/Styles.jsx';
import ProgressCircle from './ProgressCircle.jsx';

const Overview = (props) => {

  return (
    <>
    <div className="overview">
        <h3>Guest Rating's and Reviews</h3>
        <div className="overview-item">BAR GRAPH</div>
        <div className="overview-stars"><h1>4.0</h1>

        <FourStars/>
        <div>20 star ratings</div>
        </div>
        <div className="overview-recommend">
          <ProgressCircle
            progress={10}
            size={50}
            strokeWidth={5}
            circleOneStroke='#ffffff'
            circleTwoStroke='#008300'
          />
          <div className="break"></div>
          <div>
            <h4>100% would recommend</h4>
            22 recommendations
          </div>

        </div>

        <div className="break"></div>

        <div className="overview-item">COMFORT</div>
        <div className="overview-item">VALUE</div>
        <div className="overview-item">STYLE</div>
        <div className="overview-item">SIZING</div>

    </div>
    </>
  )
}

export default Overview;