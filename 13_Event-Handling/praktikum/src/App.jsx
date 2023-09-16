import Navigation from "./Components/Navigation";
import "./App.css";
import InputWithLabel from "./Components/InputWithLabel";
import InputRadio from "./Components/InputRadio";
import BsLogo from "./assets/bootstrap-logo.svg.png";
import { article } from "./article";
import { useState } from "react";

export default function App() {
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log("Random Number:", randomNumber);
  };

  const [productName, setProductName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault(); // Untuk menghindari pembaruan halaman

    if (errorMessage === "") {
      console.log("Product Name:", productName);
      setProductName("");
    } else {
      alert("Please fix the errors before submitting.");
    }
  };
  return (
    <>
      <Navigation />
      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <img
                className="img-fluid mx-auto d-block"
                style={{
                  display: "inline - block",
                  marginTop: "20px",
                  width: "80px",
                }}
                src={BsLogo}
                alt="img-bootstrap"
              />
              <div className="mt-3">
                <h1 className="text-center">{article.title.en}</h1>
                <p className="text-center">{article.description.en}</p>
                <br />
                <br />
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <h3>Detail Product</h3>
                    <form id="productForm" onSubmit={handleSubmit}>
                      <InputWithLabel
                        labelClass={"form-label"}
                        labelFor={"productname"}
                        labelText={"Product name"}
                        inputId={"productName"}
                        inputClassName={"form-control"}
                        inputType={"text"}
                        ariaLabel={"default input example"}
                        onChange={handleProductNameChange}
                      />
                      {errorMessage && (
                        <p style={{ color: "red" }}>{errorMessage}</p>
                      )}

                      <div className="mb-3 col-md-5">
                        <label for="productcategory" className="form-label">
                          Product Category
                        </label>
                        <select id="productSelect" class="form-select">
                          <option value="">Choose</option>
                          <option value="Kasur">Kasur</option>
                          <option value="Bantal">Bantal</option>
                        </select>
                      </div>
                      <div className="mb-3  col-md-5">
                        <label for="image" class="form-label pimary">
                          Image of Product
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                        />
                      </div>
                      <div className="mb-3">
                        <label for="freshness" class="form-label">
                          Product Freshness
                        </label>
                        <InputRadio
                          radioFor={"flexRadioDefault1"}
                          radioValue={"Brand New"}
                          radioText={"Brand New"}
                        />
                        <InputRadio
                          radioFor={"flexRadioDefault2"}
                          radioValue={"Second Hand"}
                          radioText={"Second Hand"}
                        />
                        <InputRadio
                          radioFor={"flexRadioDefault3"}
                          radioValue={"Refurbished"}
                          radioText={"Refurbished"}
                        />
                      </div>
                      <div class="mb-2">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label">
                          Additional Description
                        </label>
                      </div>
                      <div class="form-floating mb-2">
                        <textarea
                          className="form-control"
                          placeholder="Leave a comment here"
                          id="textArea"
                          style={{ height: "100px" }}></textarea>
                      </div>
                      <InputWithLabel
                        labelFor={"exampleFormControlTextarea1"}
                        labelClass={"form-label"}
                        labelText={"Product Price"}
                        inputId={"productPrice"}
                        inputClassName={"form-control"}
                        inputType={"number"}
                        ariaLabel={"default input example"}
                        placehholder={"$ 1"}
                      />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginTop: "100px" }}>
                        Submit
                      </button>
                    </form>
                    <button
                      onClick={handleClick}
                      type="submit"
                      className="btn btn-primary"
                      style={{ marginTop: "100px" }}>
                      generate random number
                    </button>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ marginBottom: "400px" }}>
        <h2 className="text-center">List Product</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category </th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Desciption</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody id="productLists"></tbody>
        </table>

        <input
          className="form-control"
          type="text"
          placeholder="Search by Product Name"
          aria-label="default input example"
          style={{ width: "220px" }}
        />

        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example">
          <button
            type="button"
            className="btn btn-primary"
            onClick="hapusBaris(this)">
            Delection
          </button>
          <button type="button" className="btn btn-outline-primary">
            Search
          </button>
        </div>
      </section>
    </>
  );
}
