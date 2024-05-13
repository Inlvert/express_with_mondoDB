import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import CONSTANT from "./constants";
import { refresh } from "./redux/slices/authSlice";

function App() {

  const dispatch = useDispatch();


  useEffect(() => {
    const refreshTokenFromLS = localStorage.getItem(CONSTANT.REFRESH_TOKEN);

    if(refreshTokenFromLS) {
      dispatch(refresh(refreshTokenFromLS));
    }
  }, []);


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
