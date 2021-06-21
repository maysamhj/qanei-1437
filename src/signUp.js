import React from "react";
import { Link } from "react-router-dom";

import Zalam1 from "./images/zalam/zalam-1.png";
import Zalam2 from "./images/zalam/zalam-2.png";
import Zalam5 from "./images/zalam/zalam-5.png";
import Zalam6 from "./images/zalam/zalam-6.png";
import SignUpLogo from "./images/sign-up.png";
import { facebookIcon, googlePlusIcon, linkedinIcon, signUpIcon } from "./SVGIcons";
import { isEmail } from "./mainFunctions";

export default function SignUp(){

    const [name, setName] = React.useState('');
    const [nameInvalid, setNameInvalid] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [emailInvalid, setEmailInvalid] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordInvalid, setPasswordInvalid] = React.useState('');

    const signUpHandle = ()=>{
        let hasErr = false;
        if(name === ""){
            setNameInvalid("لطفا نام خانوادگی را وارد کنید");
            hasErr = true;
        }
        if(email === ""){
            setEmailInvalid("لطفا ایمیل را وارد کنید");
            hasErr = true;
        }else if(!isEmail(email)){
            setEmailInvalid("ایمیل معتبر نمی باشد");
            hasErr = true;
        }
        if(password === ""){
            setPasswordInvalid("لطفا رمز عبور مناسبی را وارد کنید");
            hasErr = true;
        }
         
        if(hasErr) return;

        // api here
    }


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
                        <input
                            className={"input-primary" + (nameInvalid ? " error" : "")}
                            type="text"
                            placeholder="نام و نام خانوادگی"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            onClick={()=>setNameInvalid(false)}
                        />
                    </div>
                    {
                        Boolean(nameInvalid) ? <div className="invalid-input">{nameInvalid}</div> : null
                    }
                    
                    <div className='input-items'>
                        <input
                            className={"input-primary" + (emailInvalid ? " error" : "")}
                            type="email" 
                            placeholder="پست الکترونیک"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            onClick={()=>setEmailInvalid(false)}
                        />
                    </div>
                    {
                        Boolean(emailInvalid) ? <div className="invalid-input">{emailInvalid}</div> : null
                    }
                    <div className='input-items'>
                        <input
                            className={"input-primary" + (passwordInvalid ? " error" : "")}
                            type="password" 
                            placeholder="رمز عبور"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            onClick={()=>setPasswordInvalid(false)}
                        />
                    </div>
                    {
                        Boolean(passwordInvalid) ? <div className="invalid-input">{passwordInvalid}</div> : null
                    } 
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
                    <button className="button-primary submit-btn" onClick={signUpHandle}>{signUpIcon} ثبت نام</button>
                </div>
            </div>
        </div>
    );
}