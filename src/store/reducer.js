import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        salad: 0,
        tomato: 0,
        avocado: 0,
        vegmeat: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES =  {
    salad: 0.3,
    avocado: 0.7,
    tomato: 0.4,
    vegmeat: 1.3
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state;
    }
};

export default reducer;