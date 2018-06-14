import React, { Component } from 'react'
import {
  Card, CardHeader, CardText, CardBody
} from 'reactstrap';
import { connect } from 'react-redux';
import { addFavoriteRecipe } from '../actions';
import { bindActionCreators } from 'redux';

class RecipeItem extends Component {
  state = {
    favorited: false
  }

  handleFavoriteClick = () => {
    this.props.addFavoriteRecipe(this.props.recipe);
    this.setState({
      favorited: true
    });
  }

  render() {
    const { recipe } = this.props;
    return (
      <div className="recipe_card">
        <Card className="cust_card">
          <CardHeader>{recipe.title}
            {
              this.state.favorited ?
                <span>&#9733;</span>
                : <span onClick={this.handleFavoriteClick.bind(this)} className="favorite_icon">&#9734;</span>
            }
          </CardHeader>
          <CardBody>
            <img src={recipe.thumbnail} alt="Card image cap" />
            <CardText>{recipe.ingredients}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addFavoriteRecipe
  }, dispatch)
};

export default connect(null, mapDispatchToProps)(RecipeItem);
