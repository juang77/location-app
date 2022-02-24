import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import NavBar from '../src/components/NavBar/NavBar';
import Card from '../src/components/Card/card';
import Cards from '../src/components/Card/cards';

import Pajarraco from '../src/assets/Pajarraco.jpg';

test('renders page tittle', () => {
  render(<App />);
  const linkElement = screen.getByText('Location App');
  expect(linkElement).toBeInTheDocument();
});


test('renders nav title', () =>{
  render(<NavBar/>);
  const linkElement = screen.getByText('Location');

  expect(linkElement).toBeInTheDocument();
})

test('renders link to Full Locations', () =>{
  render(<NavBar/>);
  const linkElement = screen.getByText('Full Locations');

  expect(linkElement).toBeInTheDocument();
})

test('renders card correctly', () =>{
  const props = {
    id : 'e009a981-fac3-4f5d-9a86-659bfd31f411',
    name : 'Test Register 1',
    image:Pajarraco,
    opentime : '07:00:00',
    closetime: '20:15:00' ,
    alt: 'Pajarraco'

  }

  render(<Card id={props.id}
    name={props.name}
    image={props.image}
    opentime={props.opentime}
    closetime={props.closetime}
    alt={props.alt}/>);

  const linkElement = screen.getByText('Test Register 1');

  expect(linkElement).toBeInTheDocument();
})


test('renders cards correctly', () =>{
  
  const cardsContent = [
    {"id":"e009a981-fac3-4f5d-9a86-659bfd31f411","name":"Test Register 1","opentime":"07:00:00","closetime":"20:15:00", image : Pajarraco,"alt":"Pajarraco"},
    {"id":"40030305-c883-447f-827a-6878a08a1607","name":"Test Register 2","opentime":"08:00:00","closetime":"19:15:00", image : Pajarraco,"alt":"Pajarraco"},
    {"id":"f53b9552-ae9b-4ba1-8cb5-bde75c43730e","name":"Test Register 3","opentime":"07:00:00","closetime":"20:00:00", image : Pajarraco,"alt":"Pajarraco"},
    {"id":"df6b73a3-94d4-48af-a597-d8e91daef8bf","name":"Test Register 4","opentime":"07:00:00","closetime":"21:15:00", image : Pajarraco,"alt":"Pajarraco"},
    {"id":"df6b73a3-94d4-48af-a597-d8e91daef9bf","name":"Test Register 5","opentime":"07:00:00","closetime":"21:15:00", image : Pajarraco,"alt":"Pajarraco"}
  ]

  render(<Cards props = {cardsContent}/>);

  const linkElement = screen.getByText('Test Register 1');

  expect(linkElement).toBeInTheDocument();
})