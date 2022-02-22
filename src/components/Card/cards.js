import React  from 'react';
// import propTypes from 'prop-types';
import Card from './card';
import './cards.css';
import propTypes from 'prop-types';
import Pajarraco from '../../assets/Pajarraco.jpg';

function Cards({props}){
    const cards = props;
    return(
        <div className='container d-flex justify-content-center h-100 cards'>
            <div className='row'>
                {
                    cards.map(card => (
                        <div className='col-md-3 card-body' key={card.id}>
                        <Card
                            id={card.id}
                            name={card.name}
                            image={Pajarraco}
                            opentime={card.opentime}
                            closetime={card.closetime}
                            alt='Pajarraco'
                        />
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
}

Cards.propTypes = {
    locationsList : propTypes.array
}

export default Cards;