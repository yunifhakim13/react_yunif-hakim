import "./App.css";
import CreateProduct from "./component/CreateProduct/CreateProduct";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from "./component/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={CreateProduct} />
        <Route path="/LandingPage" component={LandingPage} />
      </Router>
    </>
  );
}

export default App;
