import React from "react";
import TeamCarousel from "./teamCarousel";
import CommentCarousel from "./commentCarousel";

import aboutUsImg from "./../images/about-us/aboutusimg.png";
import aboutUsTextImg from "./../images/about-us/aboutustextimg.png";
import aboutUsFooter from "./../images/about-us/about-us-text.png";
import E2 from "./../images/about-us/element2.png";
import E7 from "./../images/about-us/element7.png";
import E6 from "./../images/about-us/element6.png";
import E4 from "./../images/about-us/element4.png";
import E1 from "./../images/about-us/element1.png";

export default function AboutUs(){ 
    return (
        <div className="about-us">
            <div className="img-background">
            <img src={E2} alt="" className="circle-green"/>
            <img src={E7} alt="" className="shape-rope"/>
            <img src={E6} alt="" className="shape-rope-2"/>
            <img src={E4} alt="" className="circle-hollow"/>
            <img src={E1} alt="" className="circle-blue"/>
        </div>
            <div className="about-us-container">

            <div className="about-us-info">
                <div className="about-us-info-img">
                    <img src={aboutUsImg} alt="" />
                </div>
                <div className="about-us-info-text">
                    <h2>با ریباکس اشنا شوید!</h2>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با
                    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                    شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                    سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
                    را می طلبد، تا با نرم افزارها شناخت بیشتری را
                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                    پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                    داشت که تمام و دشواری موجود در ارائه راهکارها،
                    و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
            </div>


            <div className="about-us-content">
                <div className="about-us-conten-text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با
                    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                    شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                    سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
                    را می طلبد، تا با نرم افزارها شناخت بیشتری را
                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                    پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                    داشت که تمام و دشواری موجود در ارائه راهکارها،
                    و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
                <div className="about-us-conten-img">
                    <img src={aboutUsTextImg} alt="" />
                </div>
            </div>

            <TeamCarousel />

            <div className="about-us-text">
                <div className="about-us-conten-text">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                    چاپ، و با
                    استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                    روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                    شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                    بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                    سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان
                    را می طلبد، تا با نرم افزارها شناخت بیشتری را
                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
                    پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                    داشت که تمام و دشواری موجود در ارائه راهکارها،
                    و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                    حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </div>
                <div className="about-us-conten-img">
                    <img src={aboutUsFooter} alt="" />
                </div>
            </div>
            <CommentCarousel />
            </div>
        </div>
    );
}