import React from 'react';

const SingleItem = ({title, category, description, link}) => {
  return (<div className="card">
    <div className="head">
      <h4>{title}</h4>
    </div>
    <p className="category">{category}</p>
    <p className="description">{description}</p>
    <p className="link">{link}</p>
  </div>)

};

export default SingleItem;
