import * as React from "react";
import HomeScreen from "./pages/HomeScreen";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Console from "./pages/console";
import ResultScreen from "./pages/ResultScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/console",
    element: <Console />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search",
    element: <ResultScreen />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

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
