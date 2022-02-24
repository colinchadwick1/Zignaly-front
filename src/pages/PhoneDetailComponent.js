import React from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";

function PhoneDetailComponent() {
  const API_URI = process.env.REACT_APP_API_URI;
  const location = useLocation();
  const { individualPhone } = location.state;

  return (
    <>
      <div className="outer">
        <div className="left">
          <img src={individualPhone.image} alt="" className="img-details" />
        </div>
        <div className="right">
          <h2 className="title">{individualPhone.name}</h2>
          <p>{individualPhone.description}</p>
          <p>Colour: {individualPhone.color}</p>
          <p>Memory: {individualPhone.memory}</p>
          <p>Price: €{individualPhone.price}</p>
          <Link to={`/`}>
            <button className="btn btn-primary">Back</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PhoneDetailComponent;
