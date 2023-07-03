import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import MFooter from "./components/MFooter";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

function App() {
  const year = 2023;
  const number1 = 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World Rebase Main 1-01
          Hello World Rebase Main 02-child
          Hello World Rebase Task 02
        </p>
        <HomePage />

        <Component1
          number={number1}
        />

        <Component2 />
      </header>
      <MFooter
        year={year}
      />
    </div>
  );
}

export default App;
