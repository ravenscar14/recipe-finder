import { SET_RECIPE } from '../actions/type';

const recipes = (state=[], action) => {
    switch(action.type){
        case SET_RECIPE:
            return action.payload;
        
        default:
            return state;
    }
}


export default recipes;