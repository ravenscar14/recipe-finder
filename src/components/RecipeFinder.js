import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, NavbarBrand, Navbar } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { setRecipes } from '../actions';
import { connect } from 'react-redux';

class RecipeFinder extends Component {

    state = {
        ingredients: '',
        dish: ''
    }

    handleClick = () => {
        const url = `http://www.recipepuppy.com/api/?i=${this.state.ingredients}&q=${this.state.dish}`

        fetch(url)
            .then(res => res.json())
            .then(recipeList => {
                this.recipeList = recipeList.results;
                this.props.setRecipes(recipeList.results);
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div className="recipe_finder_form">
                <div style={{width:'100%'}}>
                    <Navbar style={{justifyContent: 'center'}} className="section_style">
                        <NavbarBrand style={{color:'#fff'}} href="/">
                            <h1>
                                <span className="highlight">R</span>ecipe <span className="highlight">F</span>inder
                            </h1>
                        </NavbarBrand>
                    </Navbar>
                </div>
                <div className="mt-2">
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="ingredients" className="mr-sm-2">Ingredients</Label>
                            <Input type="text"
                                name="ingredients"
                                id="ingredients"
                                placeholder="garlic, chicken"
                                value={this.state.ingredients}
                                onChange={event => this.setState({ ingredients: event.target.value })} />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="dish" className="mr-sm-2">Dish</Label>
                            <Input type="text"
                                name="dish"
                                id="dish"
                                placeholder="drumsticks, lollipop"
                                value={this.state.dish}
                                onChange={event => this.setState({ dish: event.target.value })} />
                        </FormGroup>
                        <Button onClick={this.handleClick.bind(this)} className="site_button">Search</Button>
                    </Form>
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setRecipes
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(RecipeFinder);
