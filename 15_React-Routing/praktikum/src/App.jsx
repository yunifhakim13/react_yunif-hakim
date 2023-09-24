import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateProduct from "./Components/CreateProduct/CreateProduct.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={CreateProduct} />
        <Route path="/LandingPage" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default App;
