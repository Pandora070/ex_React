import { PureComponent } from "react";
import "./styles.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import TopMenu from "./Components/Top-menu.js";
import Index from "./Pages/Home.js";
import Product from "./Pages/product.js";
export default class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <TopMenu />
          <Route path="/" exact component={Index} />
          <Route path="/Product/" exact component={Product} />
        </div>
      </Router>
    );
  }
}
