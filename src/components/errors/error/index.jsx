"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "@/styles/index.scss";

const ErrorComponent = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center" >
      <div
        className="row g-5 g-sm-0 align-items-center rounded-5 overflow-hidden"
        style={{ backgroundColor: "#CFD1C5",maxWidth:"1250px" }}
      >
        <div className="col-md-6 ">
          <Image
            src="/images/errorPages/errorPage.png"
            className="img-fluid w-sm-auto w-100 rounded-5"
            width={500}
            height={500}
            alt="Not found"
          />
        </div>
        <div className="col-md-6 text-center mb-sm-5 p-5 p-lg-0">
          <h2>An error has occurred. Please try again.</h2>
          <p>
            An unexpected error has occurred. We apologize for the
            inconvenience.{" "}
          </p>
          <p>
            {" "}
            Our technical team has been notified and is working to resolve the
            issue. Please try again later. If the problem persists, feel free to
            contact our support team for assistance.
          </p>
          <p>Thank you for your understanding.</p>

          <button
            className="btn p-3 fs-5"
            style={{ backgroundColor: "#FCE151" }}
            onClick={() => reset()}
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
