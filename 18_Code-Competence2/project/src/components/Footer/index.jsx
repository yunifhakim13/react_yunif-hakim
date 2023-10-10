import "../../App.css";
import LogoFooter from "../../assets/logo-mark.svg";
import Facebook from "../../assets/facebook.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <footer className="bgfooter">
      <div className="d-flex container align-items-start justify-content-between">
        <div className="d-flex flex-column gap-1">
          <div className="d-flex footer__logo align-items-center gap-2">
            <img className="img__logo" src={LogoFooter} alt="logo" />
            <p className="text__logo">
              Health<span className="text__logo-span">Specialist</span>
            </p>
          </div>
          <div className="d-flex gap-2">
            <a href="https://www.instagram.com/esburjo_solo/" target="_blank">
              <img src={Instagram} className="img__logo-sosmed" alt="" />
            </a>
            <a
              href="https://web.facebook.com/photo?fbid=119570227786247&set=a.119570251119578"
              target="_blank">
              <img src={Facebook} className="img__logo-sosmed" alt="" />
            </a>
            <a href="https://twitter.com/home" target="_bgitlank">
              <img src={Twitter} className="img__logo-sosmed" alt="" />
            </a>
          </div>
        </div>
        <div className="textFooter d-flex flex-column">
          <h1 className="">SERVICES</h1>
          <a href="#">Family Medicine</a>
          <a href="#">Internal Medicine</a>
          <a href="#">Cardiology</a>
          <a href="#">Physical Medicine</a>
        </div>
        <div className="textFooter d-flex flex-column">
          <h1 className="">DOCTORS</h1>
          <a href="#">Phillips K Vance MD</a>
          <a href="#">Stanley K Hudson</a>
          <a href="#">Kevin D Melone MD</a>
          <a href="#">Angela S Martin</a>
        </div>
        <div className="textFooter d-flex flex-column">
          <h1 className="">CONTACT US</h1>
          <p>
            Gg. Duku IIB, no.12A, Jajar, Laweyan, <br />
            Surakarta 56163
          </p>
        </div>
        <div className="textFooter">
          <div className="form__width">
            <h1 className="text-uppercase">Contact us</h1>

            <form>
              <div className="row">
                <div className="col-md-4 form-group mb-2">
                  <input
                    className="form-control input__form g-color-gray-dark-v5 g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus g-rounded-20 g-py-13 g-px-15"
                    type="text"
                    id="formName"
                    placeholder="Your name"
                  />
                </div>
                <div className="col-md-4 form-group mb-2">
                  <input
                    className="form-control input__form g-color-gray-dark-v5 g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus g-rounded-20 g-py-13 g-px-15"
                    type="tel"
                    id="formPhone"
                    placeholder="Your phone"
                  />
                </div>
                <div className="col-md-8 form-group mb-2">
                  <textarea
                    className="form-control input__form g-color-gray-dark-v5 g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-brd-primary--focus g-resize-none g-rounded-20 g-py-13 g-px-15"
                    rows="4"
                    id="massage"
                    placeholder="Message"></textarea>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-success g-rounded-30 g-px-25 g-py-13"
                  type="submit"
                  role="button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
