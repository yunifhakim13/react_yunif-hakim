import Navbar from "../Navbar/Navbar";
import BsLogo from "../Assets/bootstrap-logo.svg.png";
import article from "../article/article";
import { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Header = () => {
  const [articleLanguage, setArticleLanguage] = useState("en");

  const handleArticle = () => {
    setArticleLanguage(articleLanguage === "en" ? "id" : "en");
  };
  return (
    <>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
