import React from 'react';
import {loginSignup, cartLogo, userBtnLogo, hamburgurMenu, closeIcon, footerTelIcon, footerEmailIcon} from './SVGIcons';
import reboxLogo from "./images/logo.png";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import CartModal from './cart/CartModal';
import { Link } from "react-router-dom";
export default function HeaderSection() {

    const hamburgurCon = React.createRef();
    const [cart, setCart]= React.useState(false)


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
    const cartModalHandler= ()=> {
        setCart(!cart)
    }

    return (
    <div className="header-section">
        <CartModal cart={cart} onClose={cartModalHandler} pageMode={false}/>
        <div className="logo">
            <img src={reboxLogo} alt="rebox Logo" />
        </div>
        <div className="flex-1">
            <ul>
                <li><Link to="/">صفحه اصلی</Link></li>
                <li><Link to="/aboutUs">درباره ما</Link></li>
                <li><Link to="/contactUs">تماس با ما</Link></li>
                <li><Link to="/faq">پشتیبانی</Link></li>
            </ul>
        </div>
        <div className="btn-section">
            <button className="button-secondary button-icon hamburgur-btn" onClick={hamburgurMenuHandle}>{hamburgurMenu}</button>
            <button className="button-secondary button-icon">{userBtnLogo}</button>
            <button className="button-secondary button-icon" onClick={cartModalHandler} id="header-cart-btn">{cartLogo}</button>
            <Link to="/signIn"><button className="button-primary">{loginSignup} ورود / ثبت نام</button></Link>
        </div>
        <div className={"hamburgur-menu" + hamburugur} ref={hamburgurCon}>
            <div className="hamburgur-menu-inner">
                <div><button className="button-secondary button-icon" onClick={hamburgurMenuHandle}>{closeIcon}</button></div>
                <div className="rest-of-menu">
                    <div><img src={reboxLogo} alt="rebox Logo" /></div>
                    <div>
                        <ul>
                            <li><Link onClick={hamburgurMenuHandle} to="/aboutUs">درباره ما</Link></li>
                            <li><Link onClick={hamburgurMenuHandle} to="/contactUs">تماس با ما</Link></li>
                            <li><Link onClick={hamburgurMenuHandle} to="/faq">پشتیبانی</Link></li>
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
    </div>
    );
}