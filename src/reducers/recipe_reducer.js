import { SET_RECIPE, FAVORITE_RECIPE } from '../actions/type';

export const recipes = (state=[], action) => {
    switch(action.type){
        case SET_RECIPE:
            return action.payload;
        
        default:
            return state;
    }
}

export const favoriteRecipes = (state=[], action) => {
    switch (action.type){
        case FAVORITE_RECIPE:
            return [...state, action.payload];
        default:
            return state;
    }
}
