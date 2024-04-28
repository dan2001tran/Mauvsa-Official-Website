import React from "react";
import Navbar from "./Navbar";
import "./Root.css";
const Root = ({ component }) => {
  return (
    <div>
      <Navbar />
      <div className="container">{component}</div>
    </div>
  );
};

export default Root;
