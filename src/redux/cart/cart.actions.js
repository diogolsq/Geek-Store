import CartActionTypes from './cart.types';




export const toogleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  // payload is optional since i am only going to update the initial state on reducer,
  //and not goint to need this information floating around, i dont need it
  // payload: hidden
});

