import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Explore from "./components/Explore";
import Avenger from "./components/reviews/Avenger";
import Notebook from "./components/reviews/Notebook";
import Pokemon from "./components/reviews/Pokemon";
import Stranger from "./components/reviews/Stranger";
import Subway from "./components/reviews/Subway";
import Bravest from "./components/reviews/Bravest";
import Error from "./components/Error";
import Faq from "./components/Faq";
import French from "./components/French";
import Submit from "./components/Submit";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Explore} exact />
            <Route path="/submit" component={Submit} />
            <Route path="/faq" component={Faq} />
            <Route path="/french" component={French} />
            <Route path="/reviews/avenger" component={Avenger} />
            <Route path="/reviews/notebook" component={Notebook} />
            <Route path="/reviews/pokemon" component={Pokemon} />
            <Route path="/reviews/stranger" component={Stranger} />
            <Route path="/reviews/subway" component={Subway} />
            <Route path="/reviews/bravest" component={Bravest} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
