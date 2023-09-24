import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProduct from "./Components/CreateProduct/CreateProduct.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import DetailProduct from "./Components/CreateProduct/DetailProduct.jsx";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={CreateProduct} />
        <Route path="/LandingPage" component={LandingPage} />
        <Route path="/Detail/:id" component={DetailProduct} />
      </Switch>
    </Router>
  );
};

export default App;
