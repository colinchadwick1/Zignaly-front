import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loader from "../images/loader.gif";
import Head from "../components.js/Head";

function PhoneListContainer(props) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_URI = process.env.REACT_APP_API_URI;

  useEffect(() => {
    axios
      .get(`${API_URI}/phones`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch(console.log);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <img src={loader} alt="loading..." className="loader" />
        </>
      ) : (
        <>
          <Head />
          <div className="wrap">
            {data.map((phone) => {
              return (
                <div key={phone.id} className="card">
                  <div className="card text-center">
                    <img
                      class="card-img-top"
                      src={phone.image}
                      alt="Card  cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{phone.name}</h5>
                      <p class="card-text">€{phone.price}</p>
                      <Link
                        to={{
                          pathname: `phones/${phone.id} `,
                          state: { individualPhone: phone },
                        }}
                        className="btn btn-primary"
                      >
                        More info
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}

export default PhoneListContainer;
