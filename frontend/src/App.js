import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Stats from "./pages/stats";
import NotFound from "./pages/notFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="player-container">
            <Switch>
              <Route path="/stats">
                <Stats />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
