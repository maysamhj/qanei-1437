import React from "react"
import InputComponent from "../../InputComponent";
import { formSendIcon } from "../../SVGIcons"
export default function Support() {


    return (
        <div className="main-profile-container">

            <div className="form-row">
                <InputComponent type="text" placeholder="نام و نام خانوادگی" />
                <InputComponent type="email" placeholder="پست الکترونیک" />
            </div>
            <div className="form-row">
                <InputComponent type="text" placeholder="موضوع پیام" />
            </div>
            <div className='form-row big-textarea'>
                <InputComponent type="textarea" placeholder="متن پیام" />
            </div>
            <button className='button-primary submit-btn'>{formSendIcon} ارسال</button>

        </div>
    );
}