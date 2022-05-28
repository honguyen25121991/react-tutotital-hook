import logo from "./logo.svg";
import "./App.scss";

import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Products/Product";
import Nav from "./Navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Weather from "./Weather/Waether";
import ShoesApp from "./components/ShoesApp/ShoesApp";
import GenerateOTP from "./components/OTP/GenerateOTP";
import OTP from "./components/OTP/OTP";
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header content-left ">
              <div style={{ textAlign: "center" }}>
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <Home />
              {/* <p>
          <span>Hello World</span>
          with {JSON.stringify(x)}
        </p> */}
            </header>
            <div className="content-right">
              <AddNewProduct />
              <hr />
              <Product />
            </div>
          </div>
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/shoes">
          <ShoesApp />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/about">
          <div>About</div>
        </Route>

        <Route path="*">
          <div>404 Not found</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
