import "./App.css";
import PhoneListContainer from "./pages/PhoneListContainer";
import PhoneDetailComponent from "./pages/PhoneDetailComponent";
import { Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Route exact path="/" component={PhoneListContainer} />
      <Route exact path="/phones/:id" component={PhoneDetailComponent} />
    </>
  );
}

export default App;
