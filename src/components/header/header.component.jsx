
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo.svg';
// import Logo from '../../assets/logo.png';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { createStructuredSelector } from 'reselect';
import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionContainer, OptionDiv, OptionLink } from './header.styles';

import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionContainer>
      <OptionLink  to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink  to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv  onClick={signOutStart}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink  to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionContainer>
    { hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

// const mapStateToProps = state => ({
  //  without selector
  // currentUser: state.user.currentUser,
  // hidden: state.cart.hidden
  
  // with selectors without createSructureSelector
  // currentUser: selectCurrentUser(state),
  // hidden :selectCartHidden(state)
// });

const mapStateToProps = createStructuredSelector({
  // with selectors and createStructureSelector
  currentUser: selectCurrentUser,
  hidden :selectCartHidden,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
