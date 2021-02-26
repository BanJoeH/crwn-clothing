import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PublishableKey =
    "pk_test_51IP5UrHVK3qJvRmfZIMsOvWrbPnN1sepdHwC4rtB6fsPfKEwax7YAJqUlGHCPegu6sZO9IlfJ2fy0t2e312GF5cC00eyoowoy9";
  const onToken = (token) => {
    console.log(token);
    alert("payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN clothing ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
};

export default StripeCheckoutButton;
