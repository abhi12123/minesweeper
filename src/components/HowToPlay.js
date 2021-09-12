import React, { useState } from 'react';
import { steps } from '../utils/steps';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
    Link,
    useParams,
} from "react-router-dom";

export default function HowToOverlay() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
        <div className='how-to-overlay'>
            <div className='step secondary-font'>
                <Link to="/">
                    <i className='fas fa-times fa-2x close-btn'></i>
                </Link>
                <Slider {...settings}>
                    {
                        steps.map((step, index) => {
                            return <>
                                <div className='w3-center'>{step.image}</div>
                                <div className='secondary-font step-text'>{step.content}</div>
                            </>
                        })
                    }
                </Slider>
            </div>

        </div>
    )
}
