import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';
import {selectCartItems } from '../../redux/cart/cart.selectors';

import { withRouter } from 'react-router-dom';

const CartDropdown = ({cartItems, history}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems.size > 0 ?
      (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
      : (
        <span className='empty-message'> Your Cart is empty</span>
      )
    }  
    </div>
    <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>>
  </div>

)


const mapStateToProps = state => ({
  // without selector/memoization will rerender every time
  // cartItems: state.cart.cartItems
  // with selector
  cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));


