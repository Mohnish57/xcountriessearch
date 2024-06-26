import React, { useEffect, useState } from "react";
import "./search.css";
import axios from "axios";
import Countries from "./Countries";

const API_END_POINT = "https://restcountries.com/v3.1/all";

function SearchBar() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(API_END_POINT);
      setData(response.data);
      setFilteredData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    try {
      const filteredData = data.filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase())
      );

      setFilteredData(filteredData);
    } catch (e) {
      console.log(e);
    }
  }, [input]);

  return (
    <>
      <div className="searchBox">
        <input
          type="text"
          value={input}
          onChange={(e) => handleSearch(e)}
          placeholder="Search for countries.."
        />
      </div>
      <Countries data={filteredData} />
    </>
  );
}

export default SearchBar;
