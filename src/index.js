import React from 'react';
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DAteFnsUtils from '@date-io/date-fns';

import FullLocations from './routes/full-locations';
import AvailableLocations from './routes/available-locations';


const rootElement = document.getElementById("root");
render(
<MuiPickersUtilsProvider utils={DAteFnsUtils}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="home" element={<App />} />
      <Route path="full-locations" element={<FullLocations />} />
      <Route path="available-locations" element={<AvailableLocations />} />
    </Routes>
  </BrowserRouter>,
</MuiPickersUtilsProvider>,
  rootElement
);