import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';



import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart } from '../../redux/user/user.actions'


const SignIn = () => {

  const  [ userCredentials, setCredentials ] = useState({ email: '', password: ''})
  
  const { email, password } = userCredentials;
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({
        email:'',
        password:''})
    }catch(error){
      console.log(error);
    }

    setCredentials({email: '', password: ''})
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({...userCredentials, [name]: value})
  }

  // const { googleSignInStart } = this.props;
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required />

          <FormInput name='password'
          type='password'
          value={password}
          label='password'
          handleChange={handleChange}
          required />
          <div className='buttons'>
            <CustomButton type='submit'> Sign In </CustomButton>
            {/* <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton> */}
            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn> Sign In with Google </CustomButton>

          </div>
        </form>

      </div>

      )
  

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})


export default connect(null, mapDispatchToProps)(SignIn);
