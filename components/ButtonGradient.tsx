"use client";

import React from "react";

const ButtonGradient = ({
  children,
  className = "",
  onClick = () => {},
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button className={`btn btn-gradient animate-shimmer ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonGradient;
