import React from "react";
import "../../App";
import heroLeft from "../../assets/hero.svg";

const heroSection = () => {
  return (
    <section className="container d-flex px-3">
      <div className="flex-column mt-5">
        <h1 className="heroleft mb-5">Dedicated Health Care Specialist</h1>
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
        <button className="heroleft_btn btn btn-primary" type="submit">
          LEARN MORE
        </button>
      </div>
      <div className="flex-column">
        <img src={heroLeft} alt="hero" />
      </div>
    </section>
  );
};

export default heroSection;
