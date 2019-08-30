import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  'hover.css'


const SingleItem = ({title,category,description,link}) =>  {
  return(

<div className= "col-lg-4 mt-4">
  <Card>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <p className="category">Category: {category}</p>
    <Card.Text className="description">{description}</Card.Text>
    <a href={link} target="_blank" rel="noopener noreferrer"><Button className="hvr-bounce-to-top" variant="primary">Documentation</Button></a>
  </Card.Body>
</Card>
</div>

  )
};

export default SingleItem;
