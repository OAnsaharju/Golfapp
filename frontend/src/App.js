import React from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Stats from "./pages/stats";
import NotFound from "./pages/notFound";
import Content from "./pages/content";
import FlightRandomizer from "./pages/flightRandomizer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Footer from "./components/footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow bg-[#4B5B4C] text-gray-200 min-h-screen p-5">
            <Switch>
              <Route path="/content">
                <Content />
              </Route>
              <Route path="/util">
                <FlightRandomizer />
              </Route>
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
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
