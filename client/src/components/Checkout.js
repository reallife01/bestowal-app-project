
import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";
// import { loadStripe } from '@stripe/stripe-js';

function Checkout() {

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  
  var [number, setNumber] = useState("");

  const numberHandle = (event) => {
    setNumber(event.target.value);
  };
  const makePayment = (token) => {
    const body = {
      token,
      number,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:3000/checkout`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch((error) => console.log(error));
      
  
  };
  return (
    <form id="payment-form" onSubmit={handleSubmit}>
    <PaymentElement id="payment-element" />
      <div className="my-20 h-56 justify-center items-center grid">
        <label className="text-cyan-600">Enter amount to donate</label>
        <input
          onChange={numberHandle}
          type="number"
          placeholder="Enter Number"
          value={number}
        />
        
        <StripeCheckout
          stripeKey={process.env.REACT_APP_KEY}
          // value={stripe}
          key={stripe}
          token={makePayment}
          name="Donate"
          amount={number * 100}
        >
          <button disabled={isProcessing} id="submit"
            className="inline-block px-6 py-2.5 bg-orange-600
 text-white font-medium text-xs leading-tight uppercase
 rounded-full shadow-md hover:bg-gray-700
 hover:shadow-lg
 focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          >
          {isProcessing ? "Processing ... " : "Donate now"}
          </button>
        </StripeCheckout>
      </div>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}

export default Checkout;

// import React, { useState } from 'react';
// import StripeCheckout from 'react-stripe-checkout';

// const Checkout = () => {
//   const [amount, setAmount] = useState('');
//   const [inputValue, setInputValue] = useState('');

//   const numberHandle = (event) => {
//     setInputValue(event.target.value);
//   };
//   //   const numberHandle = (event) => {
// //     setNumber(event.target.value);
// //   };

//   const makePayment = (token) => {
//     // Use the token on the server side to create a charge
//     const body = {
//       token,
//       amount: parseFloat(amount), // Use the amount state instead of inputValue
//     };
//     setAmount()

//     const headers = {
//       'Content-Type': 'application/json',
//     };

//     fetch('http://localhost:3000/checkout', {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(body),
//     })
//       .then((response) => {
//         console.log('RESPONSE ', response);
//         const { status } = response;
//         console.log('STATUS ', status);
//       })
//       .catch((error) => console.log(error));

//   } ;

//   return (
//     <>
//       <div className='my-2'>
//         <label>Enter amount to donate</label>
//         <input
//           onChange={numberHandle}
//           type="number"
//           placeholder="Enter Number"
//           value={inputValue}
//         />
//         <StripeCheckout
//           stripeKey={process.env.REACT_APP_KEY}
//           token={makePayment}
//           name="Donate"
//           amount={parseFloat(amount) * 100} // Use the amount state instead of inputValue
//         >
//           <button className="btn-large">Donate {amount} $</button>
//         </StripeCheckout>
//       </div>
//     </>
//   );
// };

// export default Checkout;
