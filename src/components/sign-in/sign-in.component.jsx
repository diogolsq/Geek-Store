import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';



import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart } from '../../redux/user/user.actions'


class SignIn extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  // const  [ userCredentials, setCredentials ] = useState({ email: '', password: ''})
  
  // const { email, password } = userCredentials;
  
  handleSubmit = async (event) => {
    // event.preventDefault();

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   setCredentials({
    //     email:'',
    //     password:''})
    // }catch(error){
    //   console.log(error);
    // }

    // setCredentials({email: '', password: ''})
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { googleSignInStart } = this.props;
      return(
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required />

            <FormInput name='password'
            type='password'
            value={this.state.password}
            label='password'
            handleChange={this.handleChange}
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

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})


export default connect(null, mapDispatchToProps)(SignIn);
