import React from 'react';

const SingleReview = (props) => {

  return (
  <div className="listItem">
    <p>{"Title: " + props.element.title}</p>
    <p>{"Author: " + props.element.author}</p>
    <p>{"Stars: " + props.element.stars}</p>
    <p>{"Helpful: " + props.element.helpful}</p>
    <p>{"Sizing: " + props.element.sizing}</p>
    <p>{"Body: " + props.element.body}</p>
  </div>
  )

}

export default SingleReview;