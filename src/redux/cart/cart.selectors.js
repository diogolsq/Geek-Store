import { createSelector } from 'reselect';
// Selectors are good for memoization ( cashing );

const selectCart = state => state.cart;


export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);


// createSelactor take first arg as array of selectors, the second is the order
export const selectCartItems = createSelector(
    [selectCart], cart => cart.cartItems

);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity +cartItem.quantity, 0)
    );


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity*cartItem.price, 0)
)