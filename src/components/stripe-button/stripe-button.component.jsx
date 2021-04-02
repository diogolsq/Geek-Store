import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
    // stripe wants price in cents
    const priceForStripe = price * 100;
    const publishabeKey = 'pk_test_51Ibo1EBiQBupP5Iu6grIsPWagkRmzsLahebhznCd4vV2n22LI0OGzqLjeE9lZPalc0mGIc4JQUVZ1TfbOsFzW1vh00iUcPItmt';
    
    
    return (
        <StripeCheckout
            label='Pay Now'
            name='Geek Store Ltd.'
            billingAddress
            shippingAddress
        />
    )
}