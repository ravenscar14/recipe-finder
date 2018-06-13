import { SET_RECIPE } from './type';

export const setRecipes = (recipes) => ({
    type: SET_RECIPE,
    payload: recipes
});