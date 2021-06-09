import React from 'react';
import turningHand from './../images/landing/turning-hand.png';

export default function Newsletter(){
    return (
    <div className="newsletter-form">
        <div className="newsletter">
            <div className="turning-hand">
                <img src={turningHand} alt="Turning Hand" />
            </div>
            <div className="form-con">
                <h2>
                    عضویت در خبرنامه
                </h2>
                <p>
                    .با عضویت در خبرنامه ریباکس اخرین و جدیدترین رویدادها را در صندوق پست الکترونیک خود دریافت کنید
                </p>
                <form>
                    <input type="text" placeholder="ایمیل خود را وارد کنید" className="input-primary"/>
                    <button className="button-primary">
                        عضویت
                    </button>
                </form>
            </div>
        </div>
    </div>);
}