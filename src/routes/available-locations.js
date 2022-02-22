import React, {useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import Cards from '../components/Card/cards';
import { TimePicker } from "@material-ui/pickers";

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

export default function AvailableLocations() {
  const [selectedStartDate, cambiarSelectedStartDate] = useState(new Date());
  const [selectedFinalDate, cambiarFinalStartDate] = useState(new Date());
  
  const [DataLoad, setDataLoad] = useState(false);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  const [onError, setOnError] = useState(false);
  const [items, setItems] = useState([]);
  const Url = 'https://127.0.0.1:44363/api/location';

  function fetchData() {
      setOnError(false);
      setDataLoad(false);
      fetch(Url,{
        mode:'cors',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({locationOpenTime:{selectedStartDate},locationCloseTime:{selectedFinalDate}})
      })
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(false);
          setItems(result);
          setDataLoad(true);
        },
        (error) => {
          setLoading(false);
          setError(error);
          setOnError(true);
          //setDataLoad(true);
        }
      )
    
  }
  
  return (
    <div>
      <NavBar></NavBar>
      <div className='content'>
        <h2>Available Location Page</h2>
        <br></br>
        <br></br>
        <div className="datezone">
          <div className="col-md-3 eachpicker">
            <label className="alllabels">Start Date:</label><TimePicker value={selectedStartDate} onChange={cambiarSelectedStartDate}/>
          </div>
          <div className="col-md-3 eachpicker">
            <label className="alllabels">Final Date:</label><TimePicker value={selectedFinalDate} onChange={cambiarFinalStartDate}/>
          </div>
          <div className="col-md-3 eachpicker">
            <button  className="btn btn-primary" onClick={() => {fetchData(); setLoading(true)}}>Fetch</button >
          </div>
        </div>
        <br></br>
        <br></br>
        {loading === false && <div></div>}
        {loading && <div>Loading...</div>}
        {onError && <div>Error: {error.message}</div>}
        {DataLoad && onError===false && <div><Cards props = {cards}/> </div>}

        
      </div>
    </div>
  );
}
