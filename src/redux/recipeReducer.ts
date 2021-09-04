import {getRecipes} from "../services/services";

const initialState = {
    error: null,
    recipes: []
};
const SET_RECIPE = 'SET_RECIPE';


export const loadRecipes = () => ({
    type: SET_RECIPE,
    payload: getRecipes(),
});


export default (state = initialState, action) => {
    switch (action.type) {
        case `${SET_RECIPE}_PENDING`:
            return {
                ...state,
               error: false
            };
        case `${SET_RECIPE}_REJECTED`:
            return {
                ...state,
               error: true
            };
        case `${SET_RECIPE}_FULFILLED`:
            return {
                ...state,
                recipes: action.payload.data
            };
        default:
            return { ...state };
    }
};