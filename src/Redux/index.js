const redux = require('redux');

const apiReducer = (state = 0, action) => {
    switch(action.type){
        case `CHANGE_API_VALUE`:
            return action.value;
        default: 
            return state;
    }
}

const reducer = redux.combineReducers({
    apiValue: apiReducer
})


const store = redux.createStore(reducer, redux.compose(

));

store.subscribe(() => {
    console.log(store.getState().apiValue);
})

export default store;
