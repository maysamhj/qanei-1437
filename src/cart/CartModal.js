import React from "react";
import { Link } from "react-router-dom";
import SummaryFields from "./CartFields"
import {finalSubmit} from "../SVGIcons"
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function CartModal(props){
    const myModal= React.createRef();
    const modalContent= React.createRef();
    React.useEffect(()=>{
         if (props.cart=== true){
             myModal.current.style.display="block"
             setTimeout(()=>{
                 myModal.current.classList.add("show-modal");
                 modalContent.current.classList.add("toggle-modal")
                }, 50);
            if(!props.pageMode)
                disableBodyScroll(myModal.current);
            
         }else{
            myModal.current.classList.remove("show-modal");
            modalContent.current.classList.remove("toggle-modal");
            setTimeout(()=>{
                myModal.current.style.display="none";
            }, 300); 
            if(!props.pageMode)
            enableBodyScroll(myModal.current);
         }
    }, [props.cart]);

    React.useEffect(()=>{
        let resize = ()=>{
            if(window.innerWidth > 1050){
                document.querySelector('#header-cart-modal').style.left = document.querySelector("#header-cart-btn").getBoundingClientRect().left + 'px';
            }else{
                document.querySelector('#header-cart-modal').style.left = null;
            }
        }
        resize();
        window.addEventListener('resize', resize, true);

        let marginCalculator = ()=>{
            if(props.pageMode){
                document.getElementById("header-cart-modal-page-mode").style.transform = "scale(1)";
                let height = document.getElementById("header-cart-modal-page-mode").getBoundingClientRect().height;
                document.getElementById("header-cart-modal-page-mode").style.transform = null;
                let marginBottom = document.getElementById("header-cart-modal-page-mode").getBoundingClientRect().height - height;
                document.getElementById("header-cart-modal-page-mode").style.marginBottom = marginBottom + "px";
            }else{
                if(document.getElementById("header-cart-modal-page-mode")){
                    document.getElementById("header-cart-modal-page-mode").style.marginBottom = null 
                }
            }
        }
        window.addEventListener('resize', marginCalculator, true);

        return ()=>{
            window.removeEventListener('resize', resize, true);
            window.removeEventListener('resize', marginCalculator, true);
        }
    }, []);

    

    return(
        <div ref={myModal} className={"summary-modal" + (props.pageMode ? " pageMode": "")} onClick={props.onClose}>
            <div id={"header-cart-modal" + (props.pageMode ? "-page-mode" : "")} ref={modalContent} className={"modal-body" + (props.pageMode ? " pageMode": "")} onClick={e=>e.stopPropagation()}> 
                <h4>خلاصه وضعیت</h4>
                <div className='cart-status'>
                    <SummaryFields pageMode={props.pageMode}/>
                    <SummaryFields pageMode={props.pageMode}/>
                    <SummaryFields pageMode={props.pageMode}/>
                    <SummaryFields pageMode={props.pageMode}/>
                    <SummaryFields pageMode={props.pageMode}/>
                    <SummaryFields pageMode={props.pageMode}/>
                    <SummaryFields pageMode={props.pageMode}/>
                    <SummaryFields pageMode={props.pageMode}/>
                </div>
                <p>مجموع پرداختی ریباکس به شما: 37000 تومان</p>
                <Link to="/checkout">
                    <button onClick={()=>!props.pageMode ? props.onClose(): null} className="button-primary">{finalSubmit} ثبت نهایی سبد</button>
                </Link>
            </div> 
        </div>
    );

}