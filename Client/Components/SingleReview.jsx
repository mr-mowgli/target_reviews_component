import React from 'react';
import moment from 'moment';

const SingleReview = (props) => {

  return (
  <div className="listItem">
    <p>{"Title: " + props.element.title}</p>
    <p>{"Author: " + props.element.author}</p>
    <p>{"Stars: " + props.element.stars}</p>
    <p>{"Helpful: " + props.element.helpfulVotes}</p>
    <p>{"Sizing: " + props.element.sizing}</p>
    <p>{"Body: " + props.element.body}</p>
    <p>{"Date: " + moment(props.element.createdAt).startOf('minute').fromNow()}</p>
  </div>
  )

}

export default SingleReview;