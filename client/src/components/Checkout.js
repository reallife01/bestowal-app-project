import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

function Checkout() {
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
    <>
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
          token={makePayment}
          name="Donate"
          amount={number * 100}
        >
          <button
            className="inline-block px-6 py-2.5 bg-orange-600
 text-white font-medium text-xs leading-tight uppercase
 rounded-full shadow-md hover:bg-gray-700
 hover:shadow-lg
 focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Donate {number} $
          </button>
        </StripeCheckout>
      </div>
    </>
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
