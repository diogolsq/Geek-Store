import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logo from '../../assets/logo.svg';


const StripeCheckoutButton = ({ price }) => {
    // stripe wants price in cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ibo1EBiQBupP5Iu6grIsPWagkRmzsLahebhznCd4vV2n22LI0OGzqLjeE9lZPalc0mGIc4JQUVZ1TfbOsFzW1vh00iUcPItmt';
    
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
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