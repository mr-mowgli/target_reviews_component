import React from 'react';
import { Button, FiveStars, FourStars, ThreeStars, TwoStars, OneStar } from '../Styling/Styles.jsx';

const Stars = (props) => {

  var renderStars = function() {
    if (Number(props.stars) === 5) {
      return <FiveStars/>
    }
    if (Number(props.stars) === 4) {
      return <FourStars/>
    }
    if (Number(props.stars) === 3) {
      return <ThreeStars/>
    }
    if (Number(props.stars) === 2) {
      return <TwoStars/>
    }
    if (Number(props.stars) === 1) {
      return <OneStar/>
    }

    return <FiveStars/>
  }

  return (
    renderStars()
  )

}

export default Stars;