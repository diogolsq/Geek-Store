import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/logo.svg';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    // stripe wants price in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ibo1EBiQBupP5Iu6grIsPWagkRmzsLahebhznCd4vV2n22LI0OGzqLjeE9lZPalc0mGIc4JQUVZ1TfbOsFzW1vh00iUcPItmt';
    
    
    const onToken = token => {
        // console.log(token);
        // alert('Payment Succesful')
        axios({
            url: 'payment', 
            method: 'post', 
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Succesful')
            
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert(
                'There was a problem with your payment. Please sure you to use a valid card'
                );
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Geek Store Ltd.'
            billingAddress
            shippingAddress
            image={logo}
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;