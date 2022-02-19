import './App.css';
import BigImageBackGround from './assets/LocationImage.jpg'

import NavBar from "./components/NavBar/NavBar"
export default function App() {
  return (
    <div>
      <NavBar></NavBar>
      <div className='content'>
        <h1>Location App</h1>
        <p>By - Juan G. Gómez</p>
        <img src={BigImageBackGround} alt='Big Image Background' className='principal-image'></img>
      </div>
    </div>
  );
}
