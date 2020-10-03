import React from 'react';
import SingleReview from './SingleReview.jsx';

const List = (props) => {

  return (
    <ul>{props.data.map(function(element, index) {
      return <SingleReview
        key={index}
        element={element}

      />
    })}</ul>
  )
}

export default List;

