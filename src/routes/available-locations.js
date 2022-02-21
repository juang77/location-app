import React, {useState} from "react";
import NavBar from "../components/NavBar/NavBar";
import Cards from '../components/Card/cards';
import { TimePicker } from "@material-ui/pickers";

export default function AvailableLocations() {
  const [selectedStartDate, cambiarSelectedStartDate] = useState(new Date());
  const [selectedFinalDate, cambiarFinalStartDate] = useState(new Date());

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
        </div>
        <br></br>
        <br></br>
        <Cards/>
      </div>
    </div>
  );
}
