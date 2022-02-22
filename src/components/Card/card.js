import React from 'react';
import propTypes from 'prop-types';
import './card.css';

function Card({id, name, image, opentime, closetime, alt}){
    return(
        <div className='card text-center bg-dark'>
            <div className='overflow'>
                <img src={image} alt={alt} className='card-image-top'></img>
            </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{name ? name : 'Location without Name' + id}</h4>
                <p className='card-text text-secondary'>Open time: {opentime}</p>
                <p className='card-text text-secondary'>Close Time: {closetime}</p>
            </div>    
        </div>
    )
}

Card.propTypes ={
    id: propTypes.string,
    name : propTypes.string.isRequired,
    image : propTypes.string,
    opentime: propTypes.string.isRequired,
    closetime:propTypes.string.isRequired

}

export default Card;