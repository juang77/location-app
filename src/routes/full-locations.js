import React, {useEffect, useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import Cards from '../components/Card/cards';

import Pajarraco from '../assets/Pajarraco.jpg';
import Nina from '../assets/Nina.jpg';
import Picachu from '../assets/Picachu.jpg';
import Robin from '../assets/Robin.jpg';

const cards = [
    {"id":"e009a981-fac3-4f5d-9a86-659bfd31f411","name":"Test Register 1","opentime":"07:00:00","closetime":"20:15:00", image : Pajarraco,"alt":"Pajarraco"},
    {"id":"40030305-c883-447f-827a-6878a08a1607","name":"Test Register 2","opentime":"08:00:00","closetime":"19:15:00", image : Nina,"alt":"Nina"},
    {"id":"f53b9552-ae9b-4ba1-8cb5-bde75c43730e","name":"Test Register 3","opentime":"07:00:00","closetime":"20:00:00", image : Picachu,"alt":"Picachu"},
    {"id":"df6b73a3-94d4-48af-a597-d8e91daef8bf","name":"Test Register 4","opentime":"07:00:00","closetime":"21:15:00", image : Robin,"alt":"Robin"}
  ]

export default function FullLocations() {
    const Url = 'https://localhost:44363/api/location';
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch(Url,{
        mode:'cors',
        method: 'GET',
        headers: {"Content-Type": "application/json"},
      })
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
        return (
            <div>
              <NavBar></NavBar>
              <div className='content'>
                <h2>Full Location Page</h2>
                <br></br>
                <br></br>
                <div>Error: {error.message}</div>
              </div>
            </div>
          );
      } else if (!isLoaded) {
        return (
            <div>
              <NavBar></NavBar>
              <div className='content'>
                <h2>Full Location Page</h2>
                <br></br>
                <br></br>
                <div>Loading...</div>
              </div>
            </div>
          );
        
      } else {
        return (
            <div>
              <NavBar></NavBar>
              <div className='content'>
                <h2>Full Location Page</h2>
                <br></br>
                <br></br>
                <Cards props = {items}/> 
              </div>
            </div>
          );
      }
}
