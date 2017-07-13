const redux = require('redux');

const cartReducer = (state = [], action) => {
    switch(action.type){
        case `CHANGE_CART_DATA`:
            return action.value;
        default:
            return state;
    }
}

const apiReducer = (state = 0, action) => {
    switch(action.type){
        case `CHANGE_API_VALUE`:
            return action.value;
        default: 
            return state;
    }
}

const reducer = redux.combineReducers({
    apiValue: apiReducer,
    cartData: cartReducer
})


const store = redux.createStore(reducer, redux.compose(

));

store.subscribe(() => {
    console.log(store.getState());
})

export default store;
