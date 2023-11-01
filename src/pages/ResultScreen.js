import React, { useEffect, useState } from "react";
import "../styles/ResultScreen.css";
import ResultScreenCard from "../components/ResultScreenCard";
import Search from "../components/Search";
import { searchQuery } from "../Api/SearchApi";
import { useLocation } from "react-router-dom";

const ResultScreen = () => {
  const [searchInput, setSearchInput] = useState(useLocation().state);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    searchQuery(searchInput)
      .then((response) => {
        if (response.status === "OK") {
          setSearchResult(response?.data?.result);
        } else if (response.status === "BAD_REQUEST") {
          alert(response?.data?.error);
        } else {
          alert(response.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  const fetchResult = (event) => {
    event.preventDefault();

    searchQuery(searchInput)
      .then((response) => {
        if (response.status === "OK") {
          setSearchResult(response?.data?.result);
        } else if (response.status === "BAD_REQUEST") {
          alert(response.message);
        } else {
          alert(response.message);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="result-page">
      <Search
        placeholder={"Search..."}
        setValue={setSearchInput}
        value={searchInput}
      />
      <div className="center-button">
        <button onClick={fetchResult}>Search</button>
      </div>
      <div className="search-content">
        {searchResult.length === 0 ? (
          <p style={{color: "white"}}>No results found.</p>
        ) : (
          searchResult.map((result, index) => (
            <ResultScreenCard
              key={index}
              url={result.url}
              title={result.title}
              content={result.content.slice(0, 350)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ResultScreen;
