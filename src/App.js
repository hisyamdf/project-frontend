import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Landingpage from './pages/Landingpage'

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/landingpage" component={Landingpage} />
      </Switch>
    </Router>
  );
};

export default App;
