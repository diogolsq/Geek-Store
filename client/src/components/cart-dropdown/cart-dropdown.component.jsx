import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';
import {selectCartItems } from '../../redux/cart/cart.selectors';

import { withRouter } from 'react-router-dom';
import { toogleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({toogleCartHidden, cartItems, history}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems &&
      (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
    }
    {!cartItems  &&  
        <span className='empty-message'> Your Cart is empty</span>
    }  
    </div>
    <CustomButton onClick={() => {history.push('/checkout') 
    toogleCartHidden()}}> GO TO CHECKOUT</CustomButton>
  </div>

)


const mapStateToProps = state => ({
  // without selector/memoization will rerender every time
  // cartItems: state.cart.cartItems
  // with selector
  cartItems: selectCartItems(state)
})

const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));


