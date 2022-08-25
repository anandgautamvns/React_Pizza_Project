import Pizza from "./assets/image/pizza.png";
import "./App.css";
import PizzaList from "./pizzerias/pizzeriasList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Pizza} className="App-logo" alt="logo" />
        <p>Web app for pizza lover</p>
        <h1>Pizza vs Pizza</h1>
        <PizzaList/>
      </header>
    </div>
  );
}

export default App;
