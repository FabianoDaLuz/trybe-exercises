// import * as React from "react";
// import LottoNumbers from "./components/LottoNumbers";
import React from "react";
import ProductList from "./components/products-list";
// import HelloWorld from "./components/hello-world";
import productsArray from "./components/products-list";

const booksList = [
  {
    title: "The Godfather",
    pages: 433,
    isRead: true,
    isFavorite: false,
  },

  {
    title: "The Little Prince",
    pages: 92,
    isRead: true,
    isFavorite: true,
  },

  {
    title: "Clean Code",
    pages: 425,
    isRead: false,
    isFavorite: false,
  },

  {
    title: "Dom Casmurro",
    pages: 192,
    isRead: true,
    isFavorite: false,
  },

  {
    title: "Vidas Secas",
    pages: 176,
    isRead: true,
    isFavorite: false,
  },
];
console.log(booksList);

function App() {
  const lotto = [7, 21, 59, 42, 30, 33];

  return (
    <div className="App">
      <ProductList productsArray={productsArray} />
    </div>
  );
}

export default App;
