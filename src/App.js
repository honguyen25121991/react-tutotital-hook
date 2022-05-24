import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import AddNewProduct from "./components/AddNewProduct";

function App() {
  const x = [1, 2, 3, 4, { name: "erik" }];
  // const content = this.props;
  // const x = { name: "erik" };
  return (
    <div className="App">
      <header className="App-header content-left ">
        <div style={{ textAlign: "center" }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Home />

        {/* <p>Hello World with {JSON.stringify(x)}</p>

        {console.log("values x =", x)} */}

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div className="content-right">
        <AddNewProduct />
      </div>
    </div>
  );
}

export default App;
