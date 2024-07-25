"use client";
import ErrorComponent from "@/components/errors/error";
import React from "react";

const ErrorPage = ({error, reset}) => {
  return (
    <div className="h-100">
      <ErrorComponent error={error} reset={reset} />
    </div>
  );
};

export default ErrorPage;
