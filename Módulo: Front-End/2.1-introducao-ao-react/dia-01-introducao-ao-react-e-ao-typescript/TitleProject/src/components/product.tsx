// import * as React from "react";
import React from "react";
import { ProductType } from "../data/data";

type ProductProps = {
  productInfo: ProductType;
};

function Product(props: ProductProps) {
  const { title, image, price } = productInfo;
  return (
    <li className="product">
      <div>
        <p>{title}</p>
        <p>R${price}</p>
      </div>

      <img src={image} alt={title} />
    </li>
  );
}

export default Product;
