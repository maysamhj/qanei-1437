import React from 'react';
import {terms2, terms3, terms4, faq2} from "./../SVGIcons";
import Payment from './Payment';
import Questions from "./Questions"
import Cart from "./Cart"
import BooksStatus from "./BooksStatus"

import faqHeaderImg from "./../images/Faq/header-img.png";
import zalam1 from "./../images/Faq/zalam-1.png";
import zalam2 from "./../images/Faq/zalam-2.png";

export default function Faq (){
    const [tabSelect, setTabSelect]= React.useState(1);
    return(
        <div className="faq">
            <div className="zalam zalam-1">
                <img src={zalam1} alt="" />
            </div>
            <div className="zalam zalam-2">
                <img src={zalam2} alt="" />
            </div>
            <div className="faq-header">
                <img src={faqHeaderImg} alt=""/>
                <h1>سوالات متداول</h1>
            </div>
            <div className="tabs">
                <button onClick={()=>setTabSelect(1)} className={tabSelect===1 ? "selected" : ""}>
                    {faq2} سوالات عمومی               
                </button>
                <button onClick={()=>setTabSelect(2)} className={tabSelect===2 ? "selected" : ""}>
                    {terms2} وضعیت کتاب ها
                </button>
                <button onClick={()=>setTabSelect(3)} className={tabSelect===3 ? "selected" : ""}>
                    {terms3} سبد فروش
                </button>
                <button onClick={()=>setTabSelect(4)} className={tabSelect===4 ? "selected" : ""} >
                    {terms4} روال پرداخت
                </button>
            </div>
            <div>
             {tabSelect ===1 ? <Questions/> : null} 
             {tabSelect ===2 ? <BooksStatus/> : null}
             {tabSelect ===3 ? <Cart/> : null} 
             {tabSelect ===4 ? <Payment/> : null} 
            </div>
        </div>
    );
}