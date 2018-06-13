import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardDeck } from 'reactstrap';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="parent">
                {this.props.recipes.map(item => <RecipeItem key={item.title} recipe={item} />)}
            </div>
        )
    }
};

const mapStateToProps = state => ({
    recipes: state.recipes
});

export default connect(mapStateToProps, null)(RecipeList);
// style={{display: 'flex', flexWrap: 'wrap', }