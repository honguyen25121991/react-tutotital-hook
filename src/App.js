import logo from "./logo.svg";
import "./App.css";
import Todolist from "./components/TodoList";

function App() {
  const x = [1, 2, 3, 4, { name: "erik" }];
  // const content = this.props;
  // const x = { name: "erik" };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World with {JSON.stringify(x)}</p>

        {console.log("values x =", x)}
        <Todolist />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
