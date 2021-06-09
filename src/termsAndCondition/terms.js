import React from "react";
import { terms1, terms2, terms3, terms4 } from "../SVGIcons";

import TermsHead from "./../images/terms/terms-head.png";
import TermsSectionOne from "./section-one";
import TermsSectionTwo from "./section-two";
import TermsSectionThree from "./section-three";
import TermsSectionFour from "./section-four";

export default function Terms(){

    const [tab, setTab] = React.useState(1);

    return(
        <div className="terms">
            <div className="terms-head">
                <img src={TermsHead} alt="Terms Head" />
                <h1>قوانین و مقررات</h1>
            </div>
            <div className="tabs">
                <button onClick={()=>setTab(1)} className={tab === 1 ? "selected" : ""}>
                    {terms1} قوانین کلی
                </button>
                <button onClick={()=>setTab(2)} className={tab === 2 ? "selected" : ""}>
                    {terms2} وضعیت کتاب ها
                </button>
                <button onClick={()=>setTab(3)} className={tab === 3 ? "selected" : ""}>
                    {terms3} سبد فروش
                </button>
                <button onClick={()=>setTab(4)} className={tab === 4 ? "selected" : ""}>
                    {terms4} روال پرداخت
                </button>
            </div>
            <div>
                {tab === 1 ? <TermsSectionOne /> : null }
                {tab === 2 ? <TermsSectionTwo /> : null }
                {tab === 3 ? <TermsSectionThree /> : null }
                {tab === 4 ? <TermsSectionFour /> : null }
            </div>
        </div>
    );
}