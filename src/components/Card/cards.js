import React  from 'react';
import Card from './card';
import './cards.css';
import Pajarraco from '../../assets/Pajarraco.jpg';
import Nina from '../../assets/Nina.jpg';
import Picachu from '../../assets/Picachu.jpg';
import Robin from '../../assets/Robin.jpg';

const cards = [
    {
        id:1,
        name: 'Location 1',
        image : Pajarraco,
        opentime: '10:00',
        closetime: '15:00',
        alt:'Pajarraco'
    },
    {
        id:2,
        name: 'Location 2',
        image : Nina,
        opentime: '10:00',
        closetime: '15:00',
        alt:'Nina'
    },
    {
        id:3,
        name: 'Location 3',
        image : Picachu,
        opentime: '10:00',
        closetime: '15:00',
        alt:'Picachu'
    },
    {
        id:4,
        name: 'Location 4',
        image : Robin,
        opentime: '10:00',
        closetime: '15:00',
        alt:'Robin'
    }
]

function Cards(){
    return(
        <div className='container d-flex justify-content-center h-100 cards'>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-3 card-body' key={card.id}>
                        <Card
                            id={card.id}
                            name={card.name}
                            image={card.image}
                            opentime={card.opentime}
                            closetime={card.closetime}
                            alt={card.alt}
                        />
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
}

export default Cards;