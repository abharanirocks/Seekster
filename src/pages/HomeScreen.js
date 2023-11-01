import React, { useState, useEffect } from "react";
import "../styles/HomeScreen.css";
import Search from "../components/Search";
import MyCanvas from "../components/MyCanvas";
import { Link, NavLink } from "react-router-dom";

const HomeScreen = () => {
  const [scrolled, setScrolled] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > window.innerHeight / 1.3) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App${scrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <NavLink to="/console" className="console-text">
          Search console
        </NavLink>
      </div>
      <div className="logo-text">SEEKSTER</div>
      <div className="frontscreen">
        <MyCanvas id="canvasID" style={{ border: "1px solid", zIndex: 50 }} />
      </div>
      <div className="search-container">
        <div style={{ margin: "10%", width: "50%", marginLeft: "26.7%" }}>
          <Search placeholder={"Search..."} setValue={setSearchInput} value={searchInput}/>
          <Link to={searchInput ? "/search" : "#"} state={searchInput} onClick={(e) => !searchInput && e.preventDefault()}>Search</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
