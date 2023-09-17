import { useEffect, useState } from "react";
import logobs from "./assets/bootstrap-logo.svg.png";
import "./index.css";
function App() {
  useEffect(() => {
    alert("Welcome");
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg" id="customNav">
        <div className="container-fluid">
          <a className="navbar-brand ms-2" href="#">
            Simple Header
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="btn btn-primary" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a className="nav-link" href="#">
                FAQs
              </a>
              <a className="nav-link" href="#">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: "58px" }}>
          <img src={logobs} alt="logobs" />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>Create Account</h1>
          <p className="text-center">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div style={{ marginLeft: "392px", marginRight: "392px" }}>
          <form id="myForm" className="row g-3 needs-validation" novalidate>
            <div className="col-md-6">
              <label for="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-12">
              <label for="validationCustomUsername" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <label for="validationCustom03" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom03"
                placeholder="you@email.com"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>
            <div>
              <label>Gender</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="validationFormCheck2"
                  name="radio-stacked"
                  value="Male"
                  required
                />
                <label className="form-check-label" for="validationFormCheck2">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="validationFormCheck2"
                  name="radio-stacked"
                  required
                  value="Famale"
                />
                <label className="form-check-label" for="validationFormCheck2">
                  Famale
                </label>
              </div>
              <div className="form-check mb-3">
                <input
                  type="radio"
                  className="form-check-input"
                  id="validationFormCheck3"
                  name="radio-stacked"
                  required
                  value="Other"
                />
                <label className="form-check-label" for="validationFormCheck3">
                  Other
                </label>
                <div className="invalid-feedback">
                  More example invalid feedback text
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <label for="validationCustom03" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom05"
                placeholder="1234 Main St"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>
            <div className="col-md-12">
              <label for="validationCustom03" className="form-label">
                Address(optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom06"
                placeholder="Apartment of suite"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>
            <div className="col-md-3">
              <label for="validationCustom04" className="form-label">
                Nationality
              </label>
              <select className="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid nationality.
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
              }}></div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Bahasa"
                  id="invalidCheck"
                />
                <label className="form-check-label" for="invalidCheck">
                  Bahasa
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="English"
                  id="invalidCheck01"
                />
                <label className="form-check-label" for="invalidCheck">
                  English
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="Others"
                  id="invalidCheck02"
                />
                <label className="form-check-label" for="invalidCheck">
                  Others
                </label>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-primary" id="submitBtn" type="submit">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="py-3 px-4">
        <h1 className="py-2 text-center">List Account</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Neme</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Address 2</th>
              <th scope="col">Nationality</th>
              <th scope="col">Language</th>
            </tr>
          </thead>
          <tbody id="userData"></tbody>
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
          <button type="button" className="btn btn-primary">
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

export default App;
