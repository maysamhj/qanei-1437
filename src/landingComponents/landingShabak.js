import React from 'react';
import { magnifierIcon } from '../SVGIcons';
import shabakPic from './../images/landing/landing-1.png';
import turningHand from './../images/landing/turning-hand.png';
export default function LandingShabak(){
    return (
        <div className='container'>
            <div className="landing-shabak">
                <div className="right">
                    <h1>
                        ما به کتاب های شما خانه و خواننده ای جدید اهدا میکنیم
                    </h1>
                    <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، 
                    </p>
                    <div className="shabak-form">
                        <div className="turning-hand">
                            <img src={turningHand} alt="Turning Hand" />
                        </div>
                        <div className="form-con">
                            <h2>
                                شابک کتاب
                            </h2>
                            <form>
                                <input type="text" placeholder="شابک کتاب را وارد کنید" className="input-primary"/>
                                <button className="button-primary">
                                    {magnifierIcon} جستجو
                                </button>
                            </form>
                            <a href="#shabak" className="button-link">شابک چیست؟</a>
                        </div>
                    </div>
                </div>
                <div className="left">
                    <img src={shabakPic} alt="Shabak Pic" />
                </div>
            </div>
        </div>
    );
}