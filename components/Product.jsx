import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, slug, name, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            className="product-image"
            src={urlFor(image && image[0])}
            alt=""
            width={250}
            height={250}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">₹{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
