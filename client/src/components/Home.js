import React from "react";
import "../css/home.css";
import Navbar from './Navbar'
import Footer from './Footer'

const Home = ({children}) => {
  return (
    <div class = "home-body">
    <Navbar></Navbar>
    <div class="home-container">

    </div>
    <Footer></Footer>
    </div>
  );
};

export default Home;
