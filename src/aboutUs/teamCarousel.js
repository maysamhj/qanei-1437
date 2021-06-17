import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { arrowLeft, arrowRight } from "../SVGIcons";

import carousel1 from "./../images/about-us/carousel-1.png";
import carousel2 from "./../images/about-us/carousel-2.png";
import carousel3 from "./../images/about-us/carousel-3.png";
import carousel4 from "./../images/about-us/carousel-4.png";


export default function TeamCarousel(){
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2500 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 2500, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 700 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 700, min: 430 },
            items: 2
        },
        microMobile: {
            breakpoint: { max: 430, min: 0 },
            items: 1
        }
      };
      const CustomButtonGroup = ({ next, previous }) => {
        return (
          <div className="arrows">
            <button className="button-secondary button-icon" onClick={() => previous()}>{arrowLeft}</button>
            <button className="button-secondary button-icon" onClick={() => next()}>{arrowRight}</button>
          </div>
        );
      };
    return (
        <div className="team-carousel">
            <Carousel
                arrows={false}
                responsive={responsive}
                infinite={true}
                renderButtonGroupOutside={true} customButtonGroup={<CustomButtonGroup />}
            >
                <div>
                    <img draggable={false} src={carousel1} alt="carousel-1" />
                    <h4>نام و نام خانوادگی</h4>
                    <span>عنوان سمت</span>
                </div>
                <div>
                    <img draggable={false} src={carousel2} alt="carousel-2" />
                    <h4>نام و نام خانوادگی</h4>
                    <span>عنوان سمت</span>
                </div>
                <div>
                    <img draggable={false} src={carousel3} alt="carousel-3" />
                    <h4>نام و نام خانوادگی</h4>
                    <span>عنوان سمت</span>
                </div>
                <div>
                    <img draggable={false} src={carousel4} alt="carousel-4" />
                    <h4>نام و نام خانوادگی</h4>
                    <span>عنوان سمت</span>
                </div>
                <div>
                    <img draggable={false} src={carousel1} alt="carousel-1" />
                    <h4>نام و نام خانوادگی</h4>
                    <span>عنوان سمت</span>
                </div>
                <div>
                    <img draggable={false} src={carousel2} alt="carousel-2" />
                    <h4>نام و نام خانوادگی</h4>
                    <span>عنوان سمت</span>
                </div>
                <div>
                    <img draggable={false} src={carousel3} alt="carousel-3" />
                    <h4>نام و نام خانوادگی</h4>
                    <span>عنوان سمت</span>
                </div>
                <div>
                    <img draggable={false} src={carousel4} alt="carousel-4" />
                    <h4>نام و نام خانوادگی</h4>
                    <span>عنوان سمت</span>
                </div>
            </Carousel>
        </div>
    );
}