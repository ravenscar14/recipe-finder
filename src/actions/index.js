import { SET_RECIPE, FAVORITE_RECIPE } from './type';

export const setRecipes = (recipes) => ({
    type: SET_RECIPE,
    payload: recipes
});

export const addFavoriteRecipe = (recipe) => ({
    type: FAVORITE_RECIPE,
    payload: recipe
});