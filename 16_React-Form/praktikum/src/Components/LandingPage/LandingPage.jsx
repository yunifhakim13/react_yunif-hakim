import React from "react";
import "./LandingPage.css";
import HeroBg from "./assets/hero-img.png.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <header>
        <nav>
          <h1 className="logo">Simple header</h1>
          <ul className="nav-menu">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="herobg">
        <div className="heroleft">
          <div>
            <h1>Better Solutions For Your Business</h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
          </div>
          <div>
            <Link to="/" className="btnleft">
              Get Started
            </Link>
            <button className="btnright">Watch Video</button>
          </div>
        </div>
        <div className="heroright">
          <img src={HeroBg} alt="" />
        </div>
      </section>
      <section id="formbg">
        <div>
          <h1>Join Our Newsletter</h1>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form className="newsletter">
            <input type="text" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
      <footer>
        <section id="bgfooter1">
          <div className="layoutfooter">
            <div className="footercol">
              <h1>ARSHA</h1>
              <p className="pfooter1">
                A108 Adam Street New York, NY 535022 United States
              </p>
              <p className="pfooter1">
                <span>Phone:</span>+1 5589 55488 55
                <span>Email:</span>info@example.com
              </p>
            </div>
            <div className="footercol">
              <p>Useful Links</p>
              <ul className="spacefooter">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Terms Of Service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="footercol">
              <p>Our Services</p>
              <ul className="spacefooter">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className="footercol">
              <p>Our Social Networks</p>
              <p className="pfooter">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="container-rounded">
                <div className="rounded" />
                <div className="rounded" />
                <div className="rounded" />
                <div className="rounded" />
                <div className="rounded" />
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="cp1">
              <p>
                © Copyright <span className="arsa">Arsha</span>. All Rights
                Reserved
              </p>
            </div>
            <div className="cp2">
              <p>
                Designed by <span className="bootstrap">BootstrapMade</span>
              </p>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default LandingPage;
