"use client";

import { useState } from "react";
import apiClient from "@/libs/api";
import config from "@/config";

// This component is used to create Stripe Checkout Sessions
// It calls the /api/stripe/create-checkout route with the priceId, successUrl and cancelUrl
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card. You can change that in the API route
// You can also change the mode to "subscription" if you want to create a subscription instead of a one-time payment
const ButtonCheckout = ({
  priceId,
  mode = "subscription",
  className,
  children,
  primary = false,
}: {
  priceId?: string;
  mode?: "payment" | "subscription";
  className?: string;
  children?: React.ReactNode;
  primary?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePayment = async () => {
    if (!priceId) {
      window.location.href = "/api/auth/signin";
      return;
    }

    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/stripe/create-checkout",
        {
          priceId,
          successUrl: window.location.href,
          cancelUrl: window.location.href,
          mode,
        }
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <button
      className={`btn btn-primary btn-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out ${
        primary
          ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-700"
          : "bg-white border-2 border-blue-600 hover:bg-blue-100 text-blue-600"
      } ${className}`}
      onClick={handlePayment}
      disabled={isLoading}
    >
      {isLoading ? <span className="loading loading-spinner loading-md"></span> : children}
    </button>
  );
};

export default ButtonCheckout;
