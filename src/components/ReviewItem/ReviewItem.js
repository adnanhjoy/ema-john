import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product, deleteReview}) => {
    const {id, img, name, price, shipping, quantity} = product;
    return (
        <div className='review-item'>
            <div className='review'>
                <img src={img} alt="" />
            </div>
            <div className='review-details'>
                <div>
                    <h5>{name}</h5>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity: ${quantity}</p>
                </div>
                <div>
                    <button onClick={() => deleteReview(id)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;