import React, { useState, useEffect } from "react";
import "../styles/HomeScreen.css"
import Card from "../components/Card";
import Search from "../components/Search";
import Table from "../components/Table";
import MyCanvas from "../components/MyCanvas";
import { Add } from "@mui/icons-material";


function HomeScreen() {
  const [scrolled, setScrolled] = useState(false);

  const data = [
    ["https://example.com", "2023-09-01", "2023-09-10", "Active"],
    ["https://example.com/2", "2023-09-02", "2023-09-11", "Pending"],
  ];

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
      <div className="logo-text">
        SEEKSTER
      </div>
      <div
        className="frontscreen">
        <MyCanvas id="canvasID" style={{ border: "1px solid ", zIndex: 50 }} />
      </div>
      <div className="search-container">
        <div style={{ margin: "10%",width:"50%",marginLeft:"26.7%"}}>
          <Search placeholder={"Search..."}  />
        </div>
      </div>

      <div className={`second-screen${scrolled ? " scrolled" : ""}`}>
        <h1 style={{ color: "white" }}>Search your content here</h1>
        <p className="info-des">
          Seekster is a search engine created by students in India. It is
          designed to be a more comprehensive and user-friendly search
          experience than traditional search engines. Seekster indexes a wide
          variety of content, including websites, social media posts, and news
          articles. It also offers a number of features that are not available
          on other search engines, such as the ability to filter results by
          region and language.
        </p>
        <Search placeholder={"Search.."} />
        {/* <h1>Paste URLs</h1> */}
        {/* <Search placeholder={"Enter your URLs"} icon={<Add />} /> */}
        <h1 style={{ color: "white" }}>Saved Urls </h1>
        <Table data={data} />
      </div>
      <div className={`second-screen${scrolled ? " scrolled" : ""}`}>
        <Card
          title="URL"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
}

export default HomeScreen;

// import React, { useState, useCallback, useMemo, useEffect } from "react";
// import "./App.css";
// import MyCanvas from "./components/MyCanvas";
// import Card from "./components/Card";
// import SeeksterLogo from "./components/Logo";

// function App() {
//   const [scrolled, setScrolled] = useState(false);

//   const handleScroll = useCallback(() => {
//     setScrolled(true);
//   }, []);

//   const debouncedHandleScroll = useMemo(() => {
//     return debounce(handleScroll, 100);
//   }, [handleScroll]);

//   useEffect(() => {
//     window.addEventListener("scroll", debouncedHandleScroll);

//     return () => {
//       window.removeEventListener("scroll", debouncedHandleScroll);
//     };
//   }, [debouncedHandleScroll]);

//   return (
//     <div className="App">
//       {/* <MyCanvas /> */}
//       <div
//         className={`front-screen${scrolled ? " scrolled" : ""}`}
//         style={{
//           opacity: scrolled ? 0 : 1,
//           transition: "opacity 0.5s ease",
//         }}
//       >
//         <SeeksterLogo />
//         <p className="info-des">
//           Seekster is a search engine created by students Dhananjay and Abha in
//           India. It is designed to be a more comprehensive and user-friendly
//           search experience than traditional search engines. Seekster indexes a
//           wide variety of content, including websites, social media posts, and
//           news articles. It also offers a number of features that are not
//           available on other search engines, such as the ability to filter
//           results by region and language.
//         </p>
//       </div>

//       {scrolled && (
//         <div className="second-screen">
//           <Card
//             title="URL"
//             description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//           />
//         </div>
//       )}
//     </div>
//   );
// }

// function debounce(fn, delay) {
//   let timer;
//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(fn, delay);
//   };
// }

// export default App;
