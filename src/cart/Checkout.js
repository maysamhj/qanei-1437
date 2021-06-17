import React from "react";
import InputComponent from "../InputComponent";
import { Link } from "react-router-dom";
import { arrowLeft, arrowRight } from "../SVGIcons";
import post from "./../images/cart/post.png";
import peyk from "./../images/cart/peyk.png";
import zalamLeft from "./../images/cart/zalam-left.png";
import zalamRight from "./../images/cart/zalam-right.png";

export default function Checkout(){

    const [method, setMethod] = React.useState("post");
    const [rule, setRule] = React.useState(false);

    return (
        <div className="checkout-container">
            <img src={zalamLeft} className="zalam-left" alt="" />
            <img src={zalamRight} className="zalam-right" alt="" />
            <div className="checkout">
                <p className="title">جزئیات ارسال و پرداخت</p> 
                <div className="container">
                    <div className="div-begin">
                        <div className="begin-label main-label">انتخاب مبدا ارسال</div>
                        <InputComponent type="select" placeholder="استان" value={["تهران", "خراسان شمالی"]}/>
                        <InputComponent type="select" placeholder="شهرستان" value={["تهران", "مشهد"]}/>
                    </div>
                    <div className="div-finish">
                        <div className="finish-label main-label">انتخاب آدرس تحویل</div>

                        <InputComponent type="select" placeholder="آدرس" value={["تهران", "مشهد"]}/>
                        <InputComponent type="select" placeholder="تعداد بسته ها" value={["4", "3"]}/>
                    </div>
                    <div className="title-post">
                        انتخاب روش ارسال
                    </div>
                    <div className="div-img">

                        <a href="#1" className={"div-img-btn" + (method === "post" ? " selected" : "")} onClick={()=>setMethod("post")}>
                        <div><img src={post} alt="img1"/></div>   
                            <div><p>ارسال از طریق پست</p></div>
                        </a>

                        <a href="#2" className={"div-img-btn" + (method === "peyk" ? " selected" : "")} onClick={()=>setMethod("peyk")}>
                        <div><img src={peyk} alt="img2"/></div> 
                            <div><p>مراجعه پیک ریباکس</p></div>
                        </a>
                    </div>
                    <div className="div-time">
                        <div className="time-label main-label">زمان مراجعه پیک</div>
                        <InputComponent type="select" placeholder="انتخاب زمان" value={["سه شنبه 13-14", "دوشنبه 12-13"]}/>
                        <div className="time-exp">
                            <p>برای مشاهده نحوه بسته بندی مناسب و قابل قبول <a href="#3">اینجا</a> کلیک کنید.</p>
                        </div>
                    </div>
                    <div className="div-pay">
                        <div className="pay-label main-label">اطلاعات پرداخت</div>
                        <InputComponent type="select" placeholder="کارت بانکی" value={["بانک مسکن 5241 5336 545 6545", "بانک ملت 6425 4552 3365 1255"]}/>
                        <div className="time-exp">
                            <p>برای مشاهده نحوه بسته بندی مناسب و قابل قبول <a href="#4">اینجا</a> کلیک کنید.</p>
                        </div>
                    </div>
                    <div className="checkbox" onClick={()=>setRule(!rule)}>
                        <label className="container"> 
                            <span className={"checkmark" + (rule ? " checked" : "")}></span>
                            با قوانین و مقررات ریباکس موافقم.
                        </label>
                    </div>
                    <div className="div-btn">
                        <div className="div-btn-1">
                            <Link to="/cart">
                                <button type="button" className="button-primary">
                                    {arrowRight}
                                    مرحله قبل
                                </button>
                            </Link>
                        </div>
                        <div className="div-btn-2">
                            <Link to="/checkoutResult">
                                <button type="button" className="button-primary">
                                    {arrowLeft}
                                    ثبت نهایی
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}