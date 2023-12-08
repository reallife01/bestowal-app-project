import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";

import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

function Payment() {

    const stripePromise = loadStripe(process.env.REACT_APP_KEY);

  return (
    <>
      <h1 className="text-white text-center mt-6">Pay with Stripe and the Payment </h1>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
    </>
  );
}

export default Payment;