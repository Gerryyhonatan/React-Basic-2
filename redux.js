import { legacy_createStore } from "redux";

// reducer
const cartReducer = (state = {
    cart: [{id: 1, quantity: 10}],
}, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        default:
            return state
    }
};

// store
const store = legacy_createStore(cartReducer);


// subscribe
store.subscribe(() => {
    console.log("store changed : ", store.getState());
})


// dispatch
const action1 = { type: "ADD_TO_CART", payload: {id: 2, quantity: 20} };
store.dispatch(action1);