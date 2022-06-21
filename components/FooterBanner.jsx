import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner, product }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText2}</h3>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className="right">
          <h3>{footerBanner.smallText}</h3>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
          <Link href={`product/${product[3].name}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
          <img
            src={urlFor(footerBanner.image)}
            alt=""
            className="footer-banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
