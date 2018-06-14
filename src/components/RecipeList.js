import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
    render() {
        return (
            <div className="recipe_card_container container">
                {this.props.recipes.map(item => <RecipeItem key={item.title} recipe={item} />)}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect(mapStateToProps, null)(RecipeList);