import React from "react";
import CartModal from "./CartModal";
import zalamLeft from "./../images/cart/zalam-left.png";
import zalamRight from "./../images/cart/zalam-right.png";
export default function CartPage(props){


    return(
        <div className="cart-page">
            <img src={zalamLeft} className="zalam-left" alt="" />
            <img src={zalamRight} className="zalam-right" alt="" />
            <CartModal cart={true} pageMode={true}/>
        </div>
    );

}