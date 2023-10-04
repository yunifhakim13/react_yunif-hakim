import React from "react";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
  const Params = useParams();

  const products = JSON.parse(localStorage.getItem("productData"));

  const dataById = products.filter((product) => product.id === Params.id);
  console.log(dataById);
  return (
    <div>
      <h2>Detail Product</h2>
      <p>Number: {dataById[0].id}</p>
      <p>Product Name: {dataById[0].productName}</p>
      <p>Category: {dataById[0].productCategory}</p>
      <p>Image of Product: {dataById[0].productImage}</p>
      <p>Freshness: {dataById[0].productFreshness}</p>
      <p>Price: {dataById[0].productPrice}</p>
    </div>
  );
};

export default DetailProduct;
