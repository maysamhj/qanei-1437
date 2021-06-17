import React from "react";
import { trashIcon, editIcon } from "../SVGIcons";
import bookImg from './../images/cart/book.png'

export default function CartFields(props){
    return(
        <div className={"summary-fields" + (props.pageMode ? " page-mode" : "")}>
            <div>
                <img src={bookImg} alt=""/>
            </div>
            <div>
                خودت را به فنا نده ( گری جان بیشاپ )
            </div>

            <div>
                978-0062803832
            </div>

            <div>
                ‏37000  تومان
            </div>
            <div>
                <button className="button-secondary button-icon">{trashIcon}</button>
            </div>
            <div>
            <button className="button-secondary button-icon">{editIcon}</button>
            </div>

        </div>
    );

}