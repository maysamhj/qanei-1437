import React from 'react';
import {loginSignup, cartLogo, userBtnLogo, hamburgurMenu, closeIcon, footerTelIcon, footerEmailIcon} from './SVGIcons';
import reboxLogo from "./images/logo.png";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import CartModal from './cart/CartModal';
export default function HeaderSection(props) {

    const hamburgurCon = React.createRef();
    const [cart, setCart]= React.useState(false)
    const cartModalHandler= (event)=> {
        event.persist(); 
        
        
       event.nativeEvent.stopImmediatePropagation();
       event.stopPropagation();
       
        setCart(!cart)
    }
    const [hamburugur, setHamburgur] = React.useState("");
    const hamburgurMenuHandle = ()=>{
        if(hamburugur){
            setHamburgur("");
            console.log(hamburgurCon.current)
            enableBodyScroll(hamburgurCon.current);
        }else{
            setHamburgur(" open");
            console.log(hamburgurCon.current)
            disableBodyScroll(hamburgurCon.current);
        }
    }
   

    return (
<div>
       {props.path!== "dashboard" ? <div className="header-section">
        <CartModal cart={cart} click={(event)=>cartModalHandler(event)}/>
            <div className="logo">
                <img src={reboxLogo} alt="rebox Logo" />
            </div>
            <div className="flex-1">
                <ul>
                    <li><a href="#id">صفحه اصلی</a></li>
                    <li><a href="#id">درباره ما</a></li>
                    <li><a href="#id">تماس با ما</a></li>
                    <li><a href="#id">پشتیبانی</a></li>
                </ul>
            </div>
            <div className="btn-section">
                <button className="button-secondary button-icon hamburgur-btn" onClick={hamburgurMenuHandle}>{hamburgurMenu}</button>
                <button className="button-secondary button-icon">{userBtnLogo}</button>
                <button className="button-secondary button-icon" id="header-cart-btn" onClick={cartModalHandler}>{cartLogo}</button>
                <button className="button-primary">{loginSignup} ورود / ثبت نام</button>
            </div>
            <div className={"hamburgur-menu" + hamburugur} ref={hamburgurCon}>
                <div className="hamburgur-menu-inner">
                    <div><button className="button-secondary button-icon" onClick={hamburgurMenuHandle}>{closeIcon}</button></div>
                    <div className="rest-of-menu">
                        <div><img src={reboxLogo} alt="rebox Logo" /></div>
                        <div>
                            <ul>
                                <li><a href="#i">درباره ما</a></li>
                                <li><a href="#i">تماس با ما</a></li>
                                <li><a href="#i">پشتیبانی</a></li>
                            </ul>
                        </div>
                        <div className="exp">
                            <p>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود 
                            </p>
                        </div>
                        <ul dir="ltr" className="contact-list">
                            <li>{footerTelIcon} 021- 123456789</li>
                            <li>{footerEmailIcon} info@rebox.com</li>
                            <li>{footerEmailIcon} sales@rebox.com</li>
                        </ul>
                    </div>

                </div>  
            </div>
        </div> :null}
      
                
                
    
        
    </div>    
    );
}