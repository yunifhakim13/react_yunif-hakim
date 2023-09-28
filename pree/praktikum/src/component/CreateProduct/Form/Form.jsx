import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../CreateProduct.css";

const Form = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("Brand New");
  const [productPrice, setProductPrice] = useState("");
  const [productData, setProductData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log("Random Number:", randomNumber);
  };

  const handleProductNameChange = (e) => {
    const value = e.target.value;

    if (value.length > 25) {
      setErrorMessage("Product Name must not exceed 25 characters.");
    } else if (value.length > 10) {
      setErrorMessage("Product Name must not exceed 10 characters.");
    } else if (value.trim() === "") {
      setErrorMessage("Please enter a valid product name.");
    } else {
      setErrorMessage("");
    }

    setProductName(value);
  };

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handleOptionChange = (value) => {
    setProductFreshness(value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errorMessage === "") {
      const id = uuidv4();
      const newProduct = {
        id: id,
        productName: productName,
        productCategory: productCategory,
        productFreshness: productFreshness,
        productPrice: productPrice,
      };

      setProductData([...productData, newProduct]);

      setProductName("");
      setProductCategory("");
      setProductFreshness("Brand New");
      setProductPrice("");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };

  useEffect(() => {
    const storedProductData = JSON.parse(localStorage.getItem("productData"));
    if (storedProductData) {
      setProductData(storedProductData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productData", JSON.stringify(productData));
  }, [productData]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h3 className="mb-4">Detail Product</h3>
              <form id="productForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productName"
                    value={productName}
                    onChange={handleProductNameChange}
                  />
                  {errorMessage && (
                    <p className="text-danger">{errorMessage}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="productCategory" className="form-label">
                    Product Category
                  </label>
                  <select
                    id="productCategory"
                    className="form-select"
                    value={productCategory}
                    onChange={handleProductCategoryChange}>
                    <option value="">Choose</option>
                    <option value="Kasur">Kasur</option>
                    <option value="Bantal">Bantal</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="productFreshness" className="form-label">
                    Product Freshness
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="brandNew"
                      value="Brand New"
                      checked={productFreshness === "Brand New"}
                      onChange={() => handleOptionChange("Brand New")}
                    />
                    <label className="form-check-label" htmlFor="brandNew">
                      Brand New
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="secondHand"
                      value="Second Hand"
                      checked={productFreshness === "Second Hand"}
                      onChange={() => handleOptionChange("Second Hand")}
                    />
                    <label className="form-check-label" htmlFor="secondHand">
                      Second Hand
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="refurbished"
                      value="Refurbished"
                      checked={productFreshness === "Refurbished"}
                      onChange={() => handleOptionChange("Refurbished")}
                    />
                    <label className="form-check-label" htmlFor="refurbished">
                      Refurbished
                    </label>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="productPrice"
                    value={productPrice}
                    onChange={handleProductPriceChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                  Submit
                </button>
              </form>
              <button onClick={handleClick} className="btn btn-primary mt-4">
                Generate Random Number
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
