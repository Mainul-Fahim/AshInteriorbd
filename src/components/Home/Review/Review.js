import React from 'react';
import userImg from '../../../image/user.svg';
import './Review.css';
import Fade from 'react-reveal/Fade';

const Review = ({review}) => {
    const {name, address, description, img} = review;
    return (
        <Fade bottom duration={1000} distance='40px'>
            <div className="review">
                { img ? <img src={img} alt="" loading="lazy"/>:
                <img src={`${userImg}`} alt="" loading="lazy"/>}
                <h5 className="testimonialName">{name}</h5>
                <h6 className="testimonialAddress">{address}</h6>
                <p><i>{description}</i></p>
            </div>
        </Fade>
    );
};

export default Review;