import Navigation from "./Header/Navigation";
import "./CreateProduct.css";
import InputWithLabel from "../InputWithLabel";
import InputRadio from "../InputRadio";
import BsLogo from "./assets/bootstrap-logo.svg.png";
import { article } from "./Header/article/article";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  editProduct,
} from "../../redux/slices/productSlices";

export default function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productData, setProductData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [articleLanguage, setArticleLanguage] = useState("en");
  const [productImage, setProductImage] = useState("");
  const productNameRegex = /^[A-Za-z0-9\s]{1,25}$/;
  const productPriceRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  const [imageError, setImageError] = useState("");
  const [edit, setEdit] = useState("");
  const data = useSelector((state) => state.products);
  console.log(data);
  const dispatch = useDispatch();

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
    } else if (!productNameRegex.test(value)) {
      setErrorMessage("Do not enter symbols or special characters.");
    } else {
      setErrorMessage("");
    }

    setProductName(value);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleProductCategoryChange = (e) => {
    const value = e.target.value;

    if (!value) {
      setErrorMessage("Please select a product category.");
    }

    setProductCategory(value);
  };

  const handleOptionChange = (e) => {
    console.log(e.target.value);
    setProductFreshness(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    const value = e.target.value;

    if (!productPriceRegex.test(value)) {
      setErrorMessage("Please enter a valid product price.");
    } else {
      setErrorMessage("");
    }

    setProductPrice(value);
  };

  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setEdit("");
    dispatch(
      editProduct({
        id: edit,
        productName: productName,
        productPrice: productPrice,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errorMessage === "") {
      setProductName("");

      dispatch(
        addProduct({
          productName: productName,
          productCategory: productCategory,
          productFreshness: productFreshness,
          productPrice: productPrice,
          productImage: productImage,
        })
      );

      setProductName("");
      setProductCategory("");
      setProductFreshness("");
      setProductPrice("");
      setProductImage("");
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

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  const handleArticle = () => {
    setArticleLanguage(articleLanguage === "en" ? "id" : "en");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setImageError("Please select an image.");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      setImageError("Please select a JPEG or PNG image.");
      return;
    }

    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      setImageError("Image size exceeds 2MB. Please select a smaller image.");
      return;
    }

    setImageError("");
    const reader = new FileReader();
    reader.onload = (e) => {
      setProductImage(e.target.result);
    };
    reader.readAsDataURL(file);
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
              <div className="text-center py-2">
                <button
                  type="submit"
                  label={`Language: ${articleLanguage}`}
                  className="btn btn-outline-dark"
                  onClick={handleArticle}>
                  Switch Language
                </button>
              </div>
              <div>
                <button></button>
              </div>
              <div className="mt-3">
                <h1 className="text-center">
                  {article.title[articleLanguage]}
                </h1>
                <p className="text-center">
                  {article.description[articleLanguage]}
                </p>
                <div className="text-center">
                  <Link to="../LandingPage" className="btn btn-outline-dark">
                    Landing Page
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8">
                    <h3>Detail Product</h3>
                    <form id="productForm" onSubmit={handleSubmit}>
                      <InputWithLabel
                        labelClass={"form-label"}
                        labelFor={"productname"}
                        labelText={"Product Name"}
                        inputId={"productName"}
                        inputClassName={"form-control"}
                        inputType={"text"}
                        ariaLabel={"default input example"}
                        onChange={handleProductNameChange}
                      />
                      {errorMessage ? (
                        <p style={{ color: "red" }}>{errorMessage}</p>
                      ) : null}

                      <div className="mb-3 col-md-5">
                        <label for="productcategory" className="form-label">
                          Product Category
                        </label>
                        <select
                          id="productSelect"
                          className="form-select"
                          onChange={handleProductCategoryChange}>
                          <option value="">Choose</option>
                          <option value="Kasur">Kasur</option>
                          <option value="Bantal">Bantal</option>
                        </select>
                      </div>
                      <div className="mb-3 col-md-5">
                        <label for="image" className="form-label primary">
                          Image of Product
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="formFile"
                          onChange={handleImageChange}
                        />
                        {imageError && (
                          <p style={{ color: "red" }}>{imageError}</p>
                        )}
                      </div>

                      <div className="mb-3">
                        <label
                          htmlFor="productFreshness"
                          className="form-label">
                          Product Freshness
                        </label>
                        <InputRadio
                          name="productFreshness"
                          defaultValue="Brand New"
                          radioFor={"flexRadioDefault1"}
                          radioValue={"Brand New"}
                          radioText={"Brand New"}
                          checked={productFreshness === "Brand New"}
                          onChange={handleOptionChange}
                        />
                        <InputRadio
                          name="productFreshness"
                          defaultValue="Second Hand"
                          radioFor={"flexRadioDefault2"}
                          radioValue={"Second Hand"}
                          radioText={"Second Hand"}
                          checked={productFreshness === "Second Hand"}
                          onChange={handleOptionChange}
                        />
                        <InputRadio
                          name="productFreshness"
                          defaultValue="Refurbished"
                          radioFor={"flexRadioDefault3"}
                          radioValue={"Refurbished"}
                          radioText={"Refurbished"}
                          checked={productFreshness === "Refurbished"}
                          onChange={handleOptionChange}
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label">
                          Additional Description
                        </label>
                      </div>
                      <div className="form-floating mb-2">
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
                        onChange={handleProductPriceChange}
                      />
                      <button
                        onClick={handleSubmit}
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
              {/* <th scope="col">Additional Desciption</th> */}
              <th scope="col">Product Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) =>
              product.id === edit ? (
                <tr>
                  <th scope="row">
                    <Link to={`/Detail/${product.id}`}>{product.id}</Link>
                  </th>
                  <td>
                    <input
                      type="text"
                      value={product.productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </td>
                  <td>{product.productCategory}</td>
                  <td>
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      width="100"
                    />
                  </td>
                  <td>{product.productFreshness}</td>
                  <td>
                    <input
                      type="number"
                      value={product.productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                    />
                  </td>
                  <td>
                    <button className="btn btn-warning" onClick={handleUpdate}>
                      update
                    </button>
                  </td>
                </tr>
              ) : (
                <>
                  <tr key={product.id}>
                    <th scope="row">
                      <Link to={`/Detail/${product.id}`}>{product.id}</Link>
                    </th>
                    <td>{product.productName}</td>
                    <td>{product.productCategory}</td>
                    <td>
                      <img
                        src={product.productImage}
                        alt={product.productName}
                        width="100"
                      />
                    </td>
                    <td>{product.productFreshness}</td>
                    <td>{product.productPrice}</td>
                    <td>
                      <button
                        className="btn btn-success me-1"
                        onClick={() => handleEdit(product.id)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => setDeleteItemId(product.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              )
            )}
          </tbody>
        </table>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Delete Product
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Apakah Anda yakin ingin menghapus produk ini?
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal">
                  Close
                </button>
                <button
                  onClick={() => handleDelete(deleteItemId)}
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
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
