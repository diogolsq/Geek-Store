import React, { useState } from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';

import {signUpStart} from '../../redux/user/user.actions'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { render } from '@testing-library/react';


const SignUp = ({signUpStart}) => {

  const[userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
 

  const { displayName, email, password, confirmPassword } = this.userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    // const {signUpStart} = this.props

    if(password !== confirmPassword){
      alert("password don't match");
      return
    }

   signUpStart({ displayName, email, password });
  };




  const handleChange = (event) => {

  const { name, value } = event.target;


  // this.setState({ [name]: value });
  setUserCredentials({...userCredentials, [name]:value});
  };

    return (
      <div className='sign-up'>
      <h2 className='title'>I do not have a account </h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        >
        </FormInput>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        >
        </FormInput>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        >
        </FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        >
        </FormInput>

        <CustomButton type='submit'>
        SIGN UP
        </CustomButton>
      </form>
      </div>
    )

}


const mapDispatchToProps = dispatch => ({
  // googleSignInStart: () => dispatch(googleSignInStart()),
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})


export default connect(null, mapDispatchToProps)(SignUp);
