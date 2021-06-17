import React from "react";
import { listIcon } from "../SVGIcons";
import zalamLeft from "./../images/cart/zalam-left.png";
import zalamRight from "./../images/cart/zalam-right.png";

export default function CheckoutResult(){

    return (
        <div className="checkout-container">
            <img src={zalamLeft} className="zalam-left" alt="" />
            <img src={zalamRight} className="zalam-right" alt="" />
            <div className="main-packaging-guide">
                <div className="container">
                    <div className="container-header">
                        <h3>درخواست فروش شما با موفقیت ثبت شد</h3>
                    </div>
                    <div className="container-content">
                        <p> از فروش شما بسیار متشکریم</p>
                        <p>لطفا به نکات زیر توجه فرمایید:</p>
                        <ul>
                            <li> { listIcon }
                                <p>
                                    کتاب ها را به گونه ای بسته بندی کنید که از آسیب
                                    دیدگی در امان بمانند
                                </p>
                            </li>
                            <li>  { listIcon }
                                <p>
                                    ما هم اکنون یک نامه الکترونیکی به آدرس ایمیل ارسال
                                    شما کردیم. در این ایمیل یک برچسب برای روی پاکت و
                                    فاکتور فروش قرار دارد. برچسب را بر روی بسته کتاب
                                    ها بچسبانید و فاکتور را درون بسته قرار دهید
                                </p>
                            </li>
                            <li> { listIcon }
                                <p>
                                    اگر مرسوله را از طریق پیک ری باکس ارسال می کنید لطفا
                                    در زمان مقرر در آدرس اعلام شده حضور داشته باشید. در
                                    صورتی که ارسال با پست را انتخاب کرده اید
                                    مرسوله را به دفتار پستی تحویل داده و با سرویس پس
                                    کرایه پست برای ما ارسال کنید. در هر دو صورت ری باکس
                                    هزینه ی مرسوله را بر عهده می گیرد
                                </p>
                            </li>
                            <li> { listIcon }
                                <p>
                                    ما کتاب های ارسالی شما را بررسی و پول آن ها را طبق
                                    صورت حساب به حساب بانکی شما واریز خواهیم کرد
                                </p>
                            </li>
                            <li> { listIcon }
                                <p>
                                    اطلاعات بیشتر و وضعیت فروش خود را می توانید <a href="#1">اینجا</a> مشاهده کنید
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    );
}