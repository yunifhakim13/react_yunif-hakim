import "../../App.css";
import heroRight from "../../assets/AboutUs.png";

const AboutUs = () => {
  return (
    <section className="container d-flex px-3">
      <div className="flex-column container my-5">
        <img src={heroRight} alt="hero" />
      </div>
      <div className="flex-column mt-5">
        <h1 className="heroleft my-5">About Us</h1>
        <p className="paragraph mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec
          metus a neque pharetra pulvinar. Donec a facilisis libero. Integer id
          massa lorem. Morbi ut turpis porttitor, tempus libero a, lobortis
          arcu.
          <br />
          <br />
          Vivamus nec pulvinar metus. Maecenas eget nisi non quam rutrum mollis.
          Sed ut laoreet dui. Vivamus non lacus euismod, egestas lectus sit
          amet, scelerisque velit. Donec suscipit luctus consectetur. Donec
          commodo orci vehicula, sodales turpis eu, sollicitudin purus.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
