import React, { Component } from 'react';
import './App.css';
import RecipeFinder from './RecipeFinder';
import RecipeList from './RecipeList';

class App extends Component {
  render() {

    return (
      <div className="container-fluid">
       <RecipeFinder />
       <RecipeList />
      </div>
    );
  }
}

export default App;
