import React from "react";
import {userSvg} from "./../../SVGIcons"
import bioImg from "../../images/dashboard/bioImg.png"
import registeredOrders from "../../images/dashboard/registered-orders.png"
import proccessingOrders from "../../images/dashboard/processing-orders.png"
import completedOrders from "../../images/dashboard/completed-orders.png"

export default function UserDashboard() {
    return (
        <div className="content-section">

            <div className="dashboard-row">

                <div className="img-profile">
                    <div><img src={bioImg} className="bio-img" alt="" />
                        <button className="change-img button-secondary submit-btn">
                            { userSvg } 
                        </button>
                    </div>
                    <div className="name">امیرحسین نصاری اردکانی</div>
                    <div className="edit-profile"><a href="#1">ویرایش پروفایل کاربری</a></div>
                </div>

                <div className="sale-history">
                    <div className="title">سوابق فروش</div>
                    <div className="orders">
                        <div className="registered-orders">
                            <img src={registeredOrders} alt="" />
                            <p>3 سفارش ثبت شده</p>
                        </div>
                        <div className="processing-orders">
                            <img src={proccessingOrders} alt="" />
                            <p>2 سفارش در حال پردازش</p>
                        </div>
                        <div className="completed-orders">
                            <img src={completedOrders} alt="" />
                            <p>3 سفارش تکمیل شده</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="current-pay-row">
                <p>تراکنش های اخیر</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>شناسه</th>
                            <th>مبلغ</th>
                            <th>تاریخ</th>
                            <th>کد پیگیری</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="red">56676677456878</td>
                            <td>125000 ریال</td>
                            <td>1400/3/22</td>
                            <td>56676677878</td>
                        </tr>

                        <tr>
                            <td className="red">56676667877878</td>
                            <td>125000 ریال</td>
                            <td>1400/3/22</td>
                            <td>56676677878</td>
                        </tr>

                        <tr>
                            <td className="green">56676567677878</td>
                            <td>125000 ریال</td>
                            <td>1400/3/22</td>
                            <td>56676677878</td>
                        </tr>


                        <tr>
                            <td className="red">56676677456878</td>
                            <td>125000 ریال</td>
                            <td>1400/3/22</td>
                            <td>56676677878</td>
                        </tr>

                        <tr>
                            <td className="red">56676667877878</td>
                            <td>125000 ریال</td>
                            <td>1400/3/22</td>
                            <td>56676677878</td>
                        </tr>

                        <tr>
                            <td className="green">56676567677878</td>
                            <td>125000 ریال</td>
                            <td>1400/3/22</td>
                            <td>56676677878</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}




