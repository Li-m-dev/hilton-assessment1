import React from "react";
import logo from "./test1_assets/HI_mk_logo_hiltonbrandlogo_3.jpg";
import hotelExterior from "./test1_assets/hotelexterior.jpg";
import "./App.css";

function App() {
  return (
    <>
      <header className="App-header">
        <button>&lt; Back </button>
        <h3>Hotel Details</h3>
        <img src={logo} alt="logo" />
      </header>
      <div className="main-content">
        <img src={hotelExterior} alt="hotel" />
        <div className="contact-info">
          <h3>Hilton Chicago</h3>
          <p>
            720 South Michigan Avenue
            <br />
            Chicago, Illinois, 60605
          </p>
          <a href="tel:+1-312-922-4400">1-312-922-4400</a>
        </div>
        <div className="more-info">
          <ul>
            <li>
              <p>Map</p> <p>&gt;</p>
            </li>
            <li>
              <p>Photo gallery</p>
              <p>&gt;</p>
            </li>
            <li>
              <p>Amenities</p>
              <p>&gt;</p>
            </li>
          </ul>
        </div>
      </div>
      <footer>Welcome to Hilton!</footer>
    </>
  );
}

export default App;
