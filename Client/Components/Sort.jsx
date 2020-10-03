import React from 'react';

import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

const Sort = (props) => {

  return (
    <>
    <div className="dropdowns">
    <form onSubmit={props.sortOnChange}>
     <select className="dropdown" onChange={props.sortOnChange}>
        <option defaultValue="most recent">most recent</option>
        <option value="highest rated">highest rated</option>
        <option value="lowest rated">lowest rated</option>
        <option value="most helpful">most helpful</option>
      </select>
    </form>
    <form>
      <select className="dropdown" onChange={props.filterOnChange}>
        <option value="5 stars">5 stars</option>
        <option value="4 stars">4 stars</option>
        <option value="3 stars">3 stars</option>
        <option value="2 stars">2 stars</option>
        <option value="1 stars">1 stars</option>
      </select>
    </form>
    </div>
    </>
  )
}

export default Sort;