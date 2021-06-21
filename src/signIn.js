import React from "react";
import { Link } from "react-router-dom";

import Zalam1 from "./images/zalam/zalam-1.png";
import Zalam2 from "./images/zalam/zalam-2.png";
import Zalam5 from "./images/zalam/zalam-5.png";
import Zalam6 from "./images/zalam/zalam-6.png";
import SignInLogo from "./images/sign-in.png";
import { facebookIcon, googlePlusIcon, linkedinIcon, signUpIcon } from "./SVGIcons";
import { isEmail } from "./mainFunctions";

export default function SignIn(){

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [usernameInvalid, setUsernameInvalid] = React.useState('');
    const [passwordInvalid, setPasswordInvalid] = React.useState('');

    const loginHandle = ()=>{
        let hasErr = false;
        if(!isEmail(username)){
            setUsernameInvalid('نام کاربری اشتباه است');
            hasErr = true;
        }
        if(password.length === 0){
            setPasswordInvalid('لطفا رمز عبور را وارد کنید');
            hasErr = true;
        }
        if(hasErr) return;

        //api goes here
    }

    return (
        <div className="sign-in">
    
        <div className="background-image">
            <div className="background-img-1"><img src={Zalam2} alt=""/></div>
            <div className="background-img-2"><img src={Zalam1} alt=""/></div>
            <div className="background-img-3"><img src={Zalam6} alt=""/></div>
            <div className="background-img-4"><img src={Zalam5} alt=""/></div>

            
            <div className="background-img-7"><img src={Zalam5} alt=""/></div>

        </div>
        
        <div className='flex-container signup-responsive-container'>
            
            <div  className="form-items form-items-signup-page" >
            
                <p>ورود به حساب کاربری</p>
               
                <div className='input-items'>
                    <input 
                        className={"input-primary" + (Boolean(usernameInvalid) ? " error" : "")}
                        type="email"
                        name="email-address"
                        placeholder="پست الکترونیک"
                        onClick={()=>setUsernameInvalid('')}
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                {
                    Boolean(usernameInvalid) ? <div className="invalid-input">{usernameInvalid}</div> : null
                }
                <div className='input-items'>
                    <input 
                        className={"input-primary" + (Boolean(passwordInvalid) ? " error" : "")}
                        type="password"
                        placeholder="رمز عبور"
                        onClick={()=>setPasswordInvalid('')}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                {
                    Boolean(passwordInvalid) ? <div className="invalid-input">{passwordInvalid}</div> : null
                }
                <div className="sign-up-link">
                    <span>حساب کاربری ندارید؟</span>
                    <Link to="signUp" className="button-link">ثبت نام کنید</Link>
                </div>
                <p>ورود از طریق شبکه های اجتماعی</p>
                <div className='social-media-btn'>
                    <button className="button-secondary button-icon">{googlePlusIcon}</button>  
                    <button className="button-secondary button-icon">{linkedinIcon}</button>
                    <button className="button-secondary button-icon">{facebookIcon}</button>
                </div>
                <button className="button-primary submit-btn" onClick={loginHandle}>{signUpIcon} ورود</button>
                
            </div>
            <div className="image-items-signup-page">
                <img src={SignInLogo} alt=""/>
            </div>
           
        </div>
    </div>
    );
}