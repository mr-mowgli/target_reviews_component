import React from 'react';
import { Button, FourStars, } from '../Styling/Styles.jsx';

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
        <div className="overview item">RECOMMEND</div>

        <div className="break"></div>

        <div className="overview-item">VALUE</div>
        <div className="overview-item">STYLE</div>
        <div className="overview-item">SIZING</div>
        <div className="overview-item">COMFORT</div>

    </div>
    </>
  )
}

export default Overview;