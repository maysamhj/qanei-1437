import React from "react";
import InputComponent from "../InputComponent";
import AddToCartModal from "./AddToCartModal";
import { cartLogo } from "../SVGIcons";

import bookDetailImg from "./../images/book-detail/book-detail-img.png";
import bookImg from "./../images/book-detail/book-img.png";
import zalamLeft from "./../images/book-detail/zalam-left.png";
import zalamRight from "./../images/book-detail/zalam-right.png";

export default function BookDetail(){
    const [modal, setModal] = React.useState(false);
    return(
        <div className="book-detail">
            <AddToCartModal show={modal} onClose={()=>setModal(false)}/>
            <img src={zalamLeft} className="zalam-left" alt="" />
            <img src={zalamRight} className="zalam-right" alt="" />
            <div className="right">
                <div className="inner">
                    <h1>خلاصه وضعیت کتاب</h1>
                    <img src={bookImg} alt="" />
                    <h2>
                        UNFU*K YOURSELF <br />
                        خودت را به فنا نده
                    </h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>نویسنده</td><td><div>........................................</div></td><td>Gary John Bishop</td>
                            </tr>
                            <tr>
                                <td>ناشر</td><td><div>........................................</div></td><td>Harper One</td>
                            </tr>
                            <tr>
                                <td>شابک</td><td><div>........................................</div></td><td>978-0062803832</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <InputComponent placeholder="وضعیت کتاب" type="select" value={["در حد نو"]}/>
                        <InputComponent placeholder="وضعیت کتاب" type="text" value="37000 تومان" readonly/>
                    </div>
                    <button className="button-primary" onClick={()=>setModal(true)}>
                        {cartLogo}
                        افزودن به سبد خرید
                    </button>
                </div>
            </div>
            <div className="left">
                <img src={bookDetailImg} alt="" />
            </div>
        </div> 
    );
}