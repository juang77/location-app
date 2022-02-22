import React  from 'react';
// import propTypes from 'prop-types';
import Card from './card';
import './cards.css';
import propTypes from 'prop-types';

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

Cards.propTypes = {
    locationsList : propTypes.array
}

export default Cards;