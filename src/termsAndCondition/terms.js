import React from "react";
import { terms1, terms2, terms3, terms4 } from "../SVGIcons";

import TermsHead from "./../images/terms/terms-head.png";
import TermsSectionOne from "./section-one";

export default function Terms(){
    return(
        <div className="terms">
            <div className="terms-head">
                <img src={TermsHead} alt="Terms Head" />
                <h1>قوانین و مقررات</h1>
            </div>
            <div className="tabs">
                <button>
                    {terms1} قوانین کلی
                </button>
                <button>
                    {terms2} وضعیت کتاب ها
                </button>
                <button>
                    {terms3} سبد فروش
                </button>
                <button>
                    {terms4} روال پرداخت
                </button>
            </div>
            <div>
                <TermsSectionOne />
            </div>
        </div>
    );
}