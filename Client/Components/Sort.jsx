import React from 'react';

import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

const Sort = (props) => {

  // let defaultOption = props.sortOptions[0];


  return (
    <>
    <select className="dropdown">
      <option defaultValue="most recent">most recent</option>
      <option value="highest rated">highest rated</option>
      <option value="lowest rated">lowest rated</option>
      <option value="most helpful">most helpful</option>
    </select>
    <select className="dropdown">
      <option defaultValue="5 stars">5 stars</option>
      <option value="4 stars">4 stars</option>
      <option value="3 stars">3 stars</option>
      <option value="2 stars">2 stars</option>
      <option value="1 stars">1 stars</option>
    </select>
    </>
  )

}

export default Sort;