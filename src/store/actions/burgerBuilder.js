import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = ( name ) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    };
};

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

// Redux Thunk allows us to use dispatch function to utilise action creators 
// with following syntax. This allows for asynchronous calls for ingredients
export const fetchIngredients = () => {
    return dispatch => {
        axios.get('https://react-burger-generator-default-rtdb.firebaseio.com/ingredients.json')
        .then( response => {
            dispatch(setIngredients(response.data));
         })
         .catch( error => {
             dispatch(fetchIngredientsFailed());
         });
    };
};