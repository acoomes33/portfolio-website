import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
