import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg } from 'reactstrap';

const Recipes = (props) => {
    console.log(props)
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">{props.recipe.label}</CardTitle>
          <CardText>{props.recipe.calories}</CardText>
          <CardImg src={props.recipe.image} />
        </Card>
      </Col>
    </Row>
  );
};

export default Recipes;