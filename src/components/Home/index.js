import React from "react";
import "./styles.css";
import logo from "./images/vm-logo.png";
import Form from "../Form";
import ProgressBar from "../ProgressBar";

const Home = () => (
  <section className="view" id="home">
    <div id="logo">
        <img src={logo} alt="Logo Video Maker." />
        <h1>Video Maker</h1>
    </div>
    <Form />
    <ProgressBar />
  </section>
);

export default Home;