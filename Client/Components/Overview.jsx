import React from 'react';
import { Button, FourStars, } from '../Styling/Styles.jsx';
import ProgressCircle from './ProgressCircle.jsx';

const Overview = (props) => {

  return (
    <>
    <div className="overview">
        <h3>Guest Rating's and Reviews</h3>
        <div className="overview-stars"><h1>4.0</h1>

        <FourStars/>
        <div>20 star ratings</div>
        </div>
        <div className="overview-recommend">
          <ProgressCircle
            progress={10}
            size={50}
            strokeWidth={3}
            circleOneStroke='#ffffff'
            circleTwoStroke='#008300'
            complete={5}
          />
          <div className="break"></div>
          <div>
            <h4>100% would recommend</h4>
            22 recommendations
          </div>

        </div>

        <div className="break"></div>

        <div className="overview-recommend">
          <ProgressCircle
            progress={10}
            size={50}
            strokeWidth={3}
            circleOneStroke='#ffffff'
            circleTwoStroke='#008300'
            complete={5}
          />
          <div className="break"></div>
          <div>
            <h4>Comfort</h4>
            4.5 out of 5
          </div>
        </div>
        <div className="overview-item">VALUE</div>
        <div className="overview-item">STYLE</div>
        <div className="overview-item">SIZING</div>

    </div>
    </>
  )
}

export default Overview;