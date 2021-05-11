import React from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Add from "./components/Add";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
        </Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/add" component={Add} />
      </BrowserRouter>
    </>
  );
}

export default App;
