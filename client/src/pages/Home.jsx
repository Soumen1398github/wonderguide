import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ImageSlider from "../component/ImageSlider";
import Searchbar from "../component/Searchbar";
import ResponsiveCard from "../component/Card";
import NavbarUser from "../component/NavbarUser";

const Home = () => {
  return (
    <div>
      
      <NavbarUser/>
      <ImageSlider />
      <Searchbar/>
      <ResponsiveCard/>
      <Footer/>
    </div>
  );
};

export default Home;
