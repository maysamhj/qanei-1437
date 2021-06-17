import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { arrowLeft, arrowRight } from "../SVGIcons";

import profile1 from "./../images/about-us/profile-1.png";
import profile2 from "./../images/about-us/profile-2.png";
import profile3 from "./../images/about-us/profile-3.png";


export default function CommentCarousel(){


    React.useEffect(()=>{
        setTimeout(()=>{
            let slides = document.querySelectorAll(".comment-carousel li[aria-hidden='false']");
            let centerSlide = Math.ceil(slides.length / 2) - 1;
            slides[centerSlide].classList.add("center-slide");
        }, 1000);
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 2500 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 2500, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 700 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 700, min: 430 },
            items: 1
        },
        microMobile: {
            breakpoint: { max: 430, min: 0 },
            items: 1
        }
      };
      const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
        return (
          <div className="arrows">
            <button className="button-secondary button-icon" onClick={() => previous()}>{arrowLeft}</button>
            <button className="button-secondary button-icon" onClick={() => next()}>{arrowRight}</button>
          </div>
        );
      };
    return (
        <div className="comment-carousel">
            <Carousel
                afterChange={_ => {
                    let slides = document.querySelectorAll(".comment-carousel li[aria-hidden='false']");
                    let centerSlide = Math.ceil(slides.length / 2) - 1;
                    document.querySelectorAll(".comment-carousel li").forEach(elem=>{
                        elem.classList.remove("center-slide");
                    })
                    slides[centerSlide].classList.add("center-slide");
                }}
                arrows={false}
                responsive={responsive}
                infinite={true}
                renderButtonGroupOutside={true} customButtonGroup={<CustomButtonGroup />}
            >
                <div>
                    <img draggable={false} src={profile1} alt="profile-1" />
                    <h4>امیرحسین انصاری</h4>
                    <span>گرافیست</span>
                    <p>
                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                    </p>
                </div>
                <div>
                    <img draggable={false} src={profile2} alt="profile-2" />
                    <h4>امیرحسین انصاری</h4>
                    <span>گرافیست</span>
                    <p>
                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                    </p>
                </div>
                <div>
                    <img draggable={false} src={profile3} alt="profile-3" />
                    <h4>امیرحسین انصاری</h4>
                    <span>گرافیست</span>
                    <p>
                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است
                    </p>
                </div>
            </Carousel>
        </div>
    );
}