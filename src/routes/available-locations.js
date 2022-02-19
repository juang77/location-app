import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Cards from '../components/Card/cards'

export default function AvailableLocations() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='content'>
        <h2>Available Location Page</h2>
        <br></br>
        <br></br>
        <Cards/>
      </div>
    </div>
  );
}
