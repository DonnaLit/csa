import React from "react";
import Carousal from "../../Props/Carousal";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Affiliates = () => (

  <div className='des' style={{
    marginTop: '10%',
  }}>
  <h1> Our Affiliates </h1>
  <div className='car' style={{
    height: '200%',
    width: '200px',
    marginLeft: '40%',
    marginTop: '5%'
  }}>
    <Carousal />
  </div>
  </div>
);

export default Affiliates;