import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage";
import MFooter from "./components/MFooter";
import Component1 from "./components/Component1";

function App() {
  const year = 2023;
  const number1 = 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <HomePage />

        <Component1
          number={number1}
        />
      </header>
      <MFooter
        year={year}
      />
    </div>
  );
}

export default App;
