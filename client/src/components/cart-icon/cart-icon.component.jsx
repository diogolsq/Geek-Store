import React from 'react';
import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

// redux part
import { connect } from 'react-redux';
import { toogleCartHidden } from  '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';



const CartIcon = ({toogleCartHidden, itemCount}) => (
  <div className='cart-icon' onClick={toogleCartHidden}>
    <ShoppingIcon className= 'shopping-icon' />
    <span className='item-count'> {itemCount} </span>

  </div>
)


const mapDispatchToProps = dispatch => ({
  toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = state => ({
  // without selector 
  // itemCount: state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity +cartItem.quantity, 0)
  // with selector
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
