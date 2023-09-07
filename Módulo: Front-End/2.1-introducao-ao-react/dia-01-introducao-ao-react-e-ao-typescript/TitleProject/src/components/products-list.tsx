// import * as React from "react";
import React from "react";
import { ProductType } from "../data/data";
import Product from "./product";

type ProductsListProps = {
  productsArray: ProductType[];
};

function ProductList(props: ProductsListProps) {
  const { productsArray = [] } = props;
  return (
    <>
      <h1>Lista de produtos</h1>
      <ul className="productsList">
        {productsArray.map((product) => (
          <Product key={product.id} productInfo={product} />
        ))}
      </ul>
      <ul>{/* Lista de Produtos */}</ul>
    </>
  );
}

export default ProductList;
