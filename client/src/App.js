import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <header className="App-header">
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
        </header>
      </Switch>
    </div>
  );
}

export default App;
