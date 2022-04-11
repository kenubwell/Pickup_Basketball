import react from "react";
import StripeCheckout from 'react-stripe-checkout';
import './Payment.css';
import Alert from "sweetalert2";

const priceForReserve = 5 * 100;
const publishableKey = "pk_test_51Kn8NyJdjNDraugELzaSyJJf0tHbxVuYEbZGrYNhl4xulQ1AZmR7deXVIbWxez1LIGJTz5qsyNpXAPFq2EMayG4U00MVHiZZQO";

const onToken = () => {
    Alert.fire("Payment Successful", "Enjoy the gym", "success");
   }

const Payment = () => {
    return ( 
        <div>
            <StripeCheckout
            // label = 'Reserve'
            billingAddress
            shippingAddress
            amount = {priceForReserve}
            token={onToken}
            stripeKey = {publishableKey}
            >
            <button className="payment-button">Reserve</button>
            </StripeCheckout>
        </div>
     );
}
 
export default Payment;