import "../../App.css";

const Card = () => {
  return (
    <section className="container d-flex gap-5">
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title" id="card-title">
            EMERGENCIES
          </h5>
          <p className="card-text text-lg-start py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec metus a neque pharetra pulvinar. Donec a facilisis libero.
            Integer id massa lorem. Morbi ut turpis porttitor, tempus libero a,
            lobortis arcu. Vivamus nec pulvinar metus. Maecenas eget nisi non
            quam rutrum mollis. Sed ut laoreet dui.
          </p>
          <a className="btn btn-primary card_btn">MORE INFO</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title" id="card-title">
            OPENING HOURS
          </h5>
          <p className="card-text text-lg-start py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec metus a neque pharetra pulvinar. Donec a facilisis libero.
            Integer id massa lorem. Morbi ut turpis porttitor, tempus libero a,
            lobortis arcu. Vivamus nec pulvinar metus. Maecenas eget nisi non
            quam rutrum mollis. Sed ut laoreet dui.
          </p>
          <a className="btn btn-primary card_btn">MAKE AN APPOINTMENT</a>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <h5 className="card-title" id="card-title">
            TEST RESULT
          </h5>
          <p className="card-text text-lg-start py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec metus a neque pharetra pulvinar. Donec a facilisis libero.
            Integer id massa lorem. Morbi ut turpis porttitor, tempus libero a,
            lobortis arcu. Vivamus nec pulvinar metus. Maecenas eget nisi non
            quam rutrum mollis. Sed ut laoreet dui.
          </p>
          <a className="btn btn-primary card_btn">CHECK TEST</a>
        </div>
      </div>
    </section>
  );
};

export default Card;
