import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';

const RecipeItem = (props) => {
  return (
    <div className="child">
      <Card className="cust_card">
      <CardImg top width="100%" height="250px" src={props.recipe.thumbnail} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.recipe.title}</CardTitle>
          <CardText>{props.recipe.ingredients}</CardText>          
        </CardBody>
      </Card>
    </div>
  );
};

export default RecipeItem;
