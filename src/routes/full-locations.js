import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Cards from '../components/Card/cards'

export default function FullLocations() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='content'>
        <h2>Full Location Page</h2>
        <br></br>
        <br></br>
        <Cards/>
      </div>
    </div>
  );
}
