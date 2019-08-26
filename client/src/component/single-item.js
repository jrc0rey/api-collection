import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const SingleItem = ({title,category,description,link}) =>  {
  return(

<div className= "col-lg-4 mt-4">
  <Card className="card">
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <p class="category">Category: {category}</p>
    <Card.Text class="description">{description}</Card.Text>
    <a href={link}><Button variant="primary">Go somewhere</Button></a>
  </Card.Body>
</Card>
</div>

  )
};

export default SingleItem;

// <li className="list-group-item  col-sm-4 ">
//   <div>
//   <h4>{title}</h4>
//   <p>{description}</p>
//   <h6 className="link">{link}</h6>
//   </div>
// </li>
