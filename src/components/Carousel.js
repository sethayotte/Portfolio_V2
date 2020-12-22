import React from "react";

import today from '../assets/EP_ImageHighlights-01.png';
import profile from '../assets/EP_ImageHighlights-02.png';
import portfolio from '../assets/EP_ImageHighlights-03.png';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const EPSlider = () => {

    const settings = {
        dots: false,
        fade: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        className: "slides"
    }

    // const carouselSlide = document.querySelector('.carousel-slide');
    // const carouselImages = document.querySelectorAll('.carousel-slide img');

    // const prevBtn = document.querySelector('#prevBtn');
    // const nextBtn = document.querySelector('#nextBtn');

    // let counter = 1;
    // const size = carouselImages[0].clientWidth;

    // carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // nextBtn.addEventListener('click', () => {
    //     carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //     counter++;
    //     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // });

    // prevBtn.addEventListener('click', () => {
    //     carouselSlide.style.transition = "transform 0.4s ease-in-out";
    //     counter--;
    //     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // });

  return (
            <Slider {...settings} className="slide-container">
                <div>
                <img src={today} alt="Today View"/>
                </div>
                <div>
                <img src={portfolio} alt="Portfolio View"/>
                </div>
                <div>
                <img src={profile} alt="Profile View"/>
                </div>
                <div>
                <iframe src="https://www.youtube.com/embed/qq2eM0NJX-I" title="Everyday Portfolio Walkthrough" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                </div>
            </Slider>
  )
  
}

export default EPSlider;