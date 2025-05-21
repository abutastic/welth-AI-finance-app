// app/(auth)/layout.js or layout.jsx
"use client"; // 👈 REQUIRED

import React from "react";

const AuthLayout = ({ children }) => {
  return <div className="flex justify-center pt-40">{children}</div>;
};

export default AuthLayout;
