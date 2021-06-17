import React from "react";
import { cartLogo, closeIcon, masterCart } from "../SVGIcons";
import addToCartImg from "./../images/book-detail/add-to-cart.png"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Link } from "react-router-dom";

export default function AddToCartModal({show, onClose}){
    const myModal= React.createRef();
    const modalContent= React.createRef();
    React.useEffect(()=>{
        if (show === true){
            myModal.current.style.display="block"
            setTimeout(()=>{
                myModal.current.classList.add("show");
                modalContent.current.classList.add("show")
            }, 50);

            disableBodyScroll(myModal.current);
           
        }else{
           myModal.current.classList.remove("show");
           modalContent.current.classList.remove("show");
           setTimeout(()=>{
              myModal.current.style.display="none";
           }, 300); 
           enableBodyScroll(myModal.current);
        }
   }, [show]);

    return (
        <div ref={myModal} className="add-to-cart-modal">
            <div ref={modalContent} className="modal-con">
                <button className="button-secondary button-icon close-btn" onClick={onClose}>{closeIcon}</button>
                <div>
                    <img src={addToCartImg} alt="" />
                </div>
                <div>
                    <h4>وضعیت سبد فروش</h4>
                    <p>
                        کتاب های شما با موفقیت به سبد فروش ریباکس اضافه شد برای  اضافه کردن کتاب های 
                        بیشتر و یا ثبت نهایی سفارشتان از دکمه های زیر استفاده کنید. 
                    </p>
                </div>
                <div>
                    <Link to="/"><button className="button-primary">{cartLogo} افزودن موارد بیشتر</button></Link>
                    <Link to="/checkout"><button className="button-primary">{masterCart} ثبت نهایی سبد</button></Link>
                </div>
            </div>
        </div>
    )

}