import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import PhoneListContainer from "./pages/PhoneListContainer";
import PhoneDetailComponent from "./pages/PhoneDetailComponent";
import { Switch, Route } from "react-router-dom";
import React from "react";

function App() {
  const [data, setData] = useState({})
    const [ isLoading, setIsLoading] = useState(true)
    const API_URI = process.env.REACT_APP_API_URI;
  
  
    useEffect(() => {
      axios
        .get(`${API_URI}/phones`)
        .then((response) => {
          setData(response.data)
          console.log(response.data, "data")
          setIsLoading(false)
        })
        .catch(console.log);
    }, []);
  
    console.log(data[0])


  
  return (
    <>
 
      <Route exact path="/" component={PhoneListContainer} state={data} />
      <Route exact path="/phones/:id" component={PhoneDetailComponent} />

    </>
  );
}

export default App;
