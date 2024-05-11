import axios from "axios";
import React, { useEffect, useState } from "react";
import "./countries.css";

// const API_END_POINT = "https://restcountries.com/v3.1/all";

function Countries({ data }) {
  //   console.log(data);
  return (
    <>
      {/* <h1>Flags</h1> */}
      <div className="flagsSection">
        {data.map((flag) => {
          return (
            <div key={flag.cca2} className="countryCard">
              <img
                loading="lazy"
                src={flag.flags.png}
                alt={flag.flags.alt}
                width="100"
                height="80"
              />
              <span>{flag.name.common}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Countries;
