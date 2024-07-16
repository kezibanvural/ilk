"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import "@/styles/index.scss";
import { swalConfirm } from "@/helpers/swal";
import { signOut } from "next-auth/react";

const UnauthorizedComponent = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const resp = await swalConfirm("Are you sure to logout");
    if (!resp.isConfirmed) return;

    signOut({ callbackUrl: "/" });
};
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div
        className="row g-5 g-sm-0 align-items-center rounded-5 overflow-hidden"
        style={{ backgroundColor: "#B0B2A2" }}
      >
        <div className="col-lg-6">
          <Image
            src="/images/errorPages/UnauthorizedPage.png"
            className="img-fluid w-lg-auto w-100 rounded-5"
            width={500}
            height={500}
            alt="Not found"
          />
        </div>
        <div className="col-lg-6 text-center mb-sm-5 p-5 p-lg-0">
          <h2>Sorry you are unauthorized to access</h2>
          <p>Please check your login credentials or contact to administrator</p>

          <button
            className="btn p-2 fs-5"
            style={{ backgroundColor: "#F7C917" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedComponent;
