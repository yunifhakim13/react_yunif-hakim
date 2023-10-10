import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel";
import Card1 from "../../assets/card1.svg";
import Card2 from "../../assets/card2.svg";
import Card3 from "../../assets/card3.svg";
import Card4 from "../../assets/card4.svg";
import "../../App.jsx";
import { useEffect } from "react";

const DoctorCard = () => {
  useEffect(() => {
    $(".owl-carousel").owlCarousel({
      items: 3,
      //   loop: true,
      margin: 10,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  }, []);

  return (
    <section className="container" id="parentsCrs">
      <h1 className="heroleft py-5 ms-5">Doctors</h1>
      <div className="owl-carousel owl-theme">
        <div className="item">
          <div className="card" id="cardCrs">
            <img src={Card1} className="" alt="..." />
            <div className="card-body m-auto text-center">
              <h5 className="card-title py" id="titleCrs">
                Phillips K Vance MD
              </h5>
              <a href="#" className="btn btn-dark">
                Family Medicine
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card" id="cardCrs">
            <img src={Card2} className="" alt="..." />
            <div className="card-body m-auto text-center">
              <h5 className="card-title py" id="titleCrs">
                Stanley K Hudson
              </h5>
              <a href="#" className="btn btn-dark">
                Internal Medicine
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card" id="cardCrs">
            <img src={Card3} className="" alt="..." />
            <div className="card-body m-auto text-center">
              <h5 className="card-title py" id="titleCrs">
                Kevin D Melone MD
              </h5>
              <a href="#" className="btn btn-dark">
                Cardiology
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card" id="cardCrs">
            <img src={Card4} className="" alt="..." />
            <div className="card-body m-auto text-center">
              <h5 className="card-title py" id="titleCrs">
                Angela S Martin
              </h5>
              <a href="#" className="btn btn-dark">
                Physical Therapy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorCard;
