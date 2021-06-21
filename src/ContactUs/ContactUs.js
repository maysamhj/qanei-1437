import React from "react"
import InputComponent from "./../InputComponent"

import contactuS from "./../images/contactUs/header-img.png"
import zalam1 from "./../images/contactUs/zalam-1.png";
import zalam2 from "./../images/contactUs/zalam-2.png";
import {footerEmailIcon, footerTelIcon, facebookIcon, linkedinIcon, googlePlusIcon, formSendIcon} from "./../SVGIcons"


export default function ContactUs(){
    return (
        <div className="contact-us">
            <div className="zalam zalam-1">
                <img src={zalam1} alt="" />
            </div>
            <div className="zalam zalam-2">
                <img src={zalam2} alt="" />
            </div>
            <div className="contact-header">
                <img src={contactuS} alt="contactUs"  />
                <p>با ما در تماس باشید</p>
            </div>
            <div className="contact-body">
                <div className='contact-info'>
                    <ul dir="ltr">
                        <li >{footerTelIcon} <p>021- 123456789</p></li>
                        <li>{footerTelIcon} <p>021- 123456789</p></li>
                        <li>{footerEmailIcon} <p>sales@rebox.com</p></li>
                        <li>{footerEmailIcon} <p>info@rebox.com</p></li>
                    </ul>
                    <div className="social-media" dir="ltr">
                        <button className="button-secondary button-icon">{googlePlusIcon}</button>
                        <button className="button-secondary button-icon">{linkedinIcon}</button>
                        <button className="button-secondary button-icon">{facebookIcon}</button>
                    </div>
                </div> 
                <div className='contact-form'>
                    <p>تماس با ما</p>
                    <InputComponent type='text' placeholder='نام و نام خانوادگی'/>
                    <InputComponent type='text' placeholder='پست الکترونیک'/>
                    <InputComponent type='textarea' value='' placeholder='متن پیغام'/>
                    
                    <button className="button-primary">{formSendIcon} ارسال</button>
                </div>
            </div> 
            
        </div>
       
    );
}