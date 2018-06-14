import { combineReducers } from 'redux';
import { recipes, favoriteRecipes } from './recipe_reducer';

export default combineReducers({
    recipes,
    favoriteRecipes
});


