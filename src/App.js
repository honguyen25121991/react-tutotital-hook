import logo from "./logo.svg";
import "./App.scss";

import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Products/Product";

function App() {
  const x = [1, 2, 3, 4, { name: "erik" }];

  return (
    <div className="App">
      <header className="App-header content-left ">
        <div style={{ textAlign: "center" }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Home />
        <p>
          <span>Hello World</span>
          with {JSON.stringify(x)}
        </p>
      </header>
      <div className="content-right">
        <AddNewProduct />
        <hr />
        <Product />
      </div>
    </div>
  );
}

export default App;
