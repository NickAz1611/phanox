import React, { useEffect, useState } from "react";
import { useStateContext } from "../context/StateContext";
import { BsBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import { runSchoolPride } from "../lib/utils";
const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantites } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantites(0);
    runSchoolPride();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order !</h2>
        <p className="email-msg">Check your email for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:pratapnikhil16112001@gmail.com">
            pratapnikhil16112001@gmail
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
