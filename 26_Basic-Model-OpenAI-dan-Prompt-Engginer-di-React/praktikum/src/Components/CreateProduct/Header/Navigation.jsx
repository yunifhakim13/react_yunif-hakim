import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav class="navbar navbar-expand-lg shadow fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Simple Header
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="../Login" class="nav-link active">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
