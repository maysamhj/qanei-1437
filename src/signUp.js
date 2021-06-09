import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Zalam1 from "./images/zalam/zalam-1.png";
import Zalam2 from "./images/zalam/zalam-2.png";
import Zalam5 from "./images/zalam/zalam-5.png";
import Zalam6 from "./images/zalam/zalam-6.png";
import SignUpLogo from "./images/sign-up.png";
import { facebookIcon, googlePlusIcon, linkedinIcon, signUpIcon } from "./SVGIcons";

export default function SignUp(){
    return (
        <div className="sign-up">
            <div className="background-image">
                <div className="background-img-1"><img src={Zalam1} alt=""/></div>
                <div className="background-img-2"><img src={Zalam2} alt=""/></div>
                <div className="background-img-3"><img src={Zalam5} alt=""/></div>
                <div className="background-img-7"><img src={Zalam6} alt=""/></div>
            </div>
            <div className="flex-container">
                <div className="image-items">
                    <img src={SignUpLogo} alt=""/>
                </div>
                <div  className="form-items" >
                    <p>ثبت نام</p>
                    <div className='input-items'>
                        <input className="input-primary" type="text" name="username" placeholder="نام و نام خانوادگی"/>
                    </div>
                    <div className="invalid-input"></div>
                    <div className='input-items'>
                        <input className="input-primary"type="email" name="email-address" placeholder="پست الکترونیک"/>
                    </div>
                    <div className="invalid-input"></div>
                    <div className='input-items'>
                        <input className="input-primary" type="password" name="pass" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="رمز عبور"/>
                    </div>
                    <div className="invalid-input">رمز عبور وارد شده نامعتبر است.</div>
                    
                    <div className="sign-up-link">
                        <span>حساب کاربری دارید؟</span>
                        <Link to="signIn" className="button-link">وارد شوید</Link>
                    </div>
                    <p>ثبت نام از طریق شبکه های اجتماعی</p>
                    <div className='social-media-btn'>
                        <button className="button-secondary button-icon">{facebookIcon}</button>  
                        <button className="button-secondary button-icon">{linkedinIcon}</button>
                        <button className="button-secondary button-icon">{googlePlusIcon}</button>
                    </div>
                    <button className="button-primary submit-btn">{signUpIcon} ثبت نام</button>
                </div>
            </div>
        </div>
    );
}