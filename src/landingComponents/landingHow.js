import React from 'react';
import ReactPlayer from 'react-player'

import how1 from './../images/landing/how-1.png';
import how2 from './../images/landing/how-2.png';
import how3 from './../images/landing/how-3.png';
import playVideo from './../images/landing/play-video.png';

export default function LandingHow(){
    return (
    <div className="landing-how-con">
        <div className="landing-how">
            <h2 className="mobile-header">ریباکس چطور کار میکند؟</h2>
            <div className="how-1">
                <div className="left">
                    <h2>ریباکس چطور کار میکند؟</h2>
                    <p>
                        در مرجله اول شابک کتاب را که در شناسنامه آن و یا روی بارکد کتاب درج شده، وارد کنید.  در مرحله دوم وضعیت کتاب را مشخص کنید (اطلاعات بیشتر در مورد وضعیت کتاب) تا قیمت کتاب نمایش داده شود. کتاب ها را در سبد فروش قرار داده و فرایند فروش را تکمیل کنید. 
                    </p>
                </div>
                <div className="right">
                    <img src={how1} alt="how 1" />
                </div>
            </div>
            <div className="how-2">
                <div className="left">
                    <img src={how2} alt="how 2" />
                </div>
                <div className="right">
                    <p>
                        کتاب ها را در جعبه های مناسب قرار داده و از طریق پستِ پس کرایه برای ما ار سال کنید. اگر در شهر تهران زندگی می کنید می توانید از خدمات رایگان پیک ریباکس استفاده کنید. 
                        در نظر داشته باشید که حداقل قیمت فروش، صد هزار تومان می باشد.
                        دقت کنید که شما برای ارسال کتاب ها هیچ هزینه ای پرداخت نمیکنید                
                    </p>
                </div>
            </div>
            <div className="how-3">
                <div className="left">
                    <p>
                        به محض ورود کتاب ها به انبار ما، همکاران ما آن ها را با دقت بررسی کرده، صحت و وضعیت کتاب ها را  تایید می کنند. آن ها نتیجه این بررسی را بوسیله ایمیل به اطلاع شما خواهند رساند. سه تا پنج روز پس از وصول کتاب ها هزینه آنها به حساب شما واریز خواهد شد.
                    </p>
                </div>
                <div className="right">
                    <img src={how3} alt="how 3" />
                </div>
            </div>
        </div>
        <div className="landing-how-video">
            <h2>
                ریباکس چطور کار میکند؟
            </h2>
            <ReactPlayer 
                url='/videos/1.mp4'
                playIcon = {<img src={playVideo} alt="play video" width="80"/>}
                light={'/videos/thumbnail.png'}
                playing
                width="100%"
            />
        </div>
    </div>);
}