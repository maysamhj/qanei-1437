import React from "react";
import InputComponent from "../../InputComponent";
import { saveUserInfo } from "../../SVGIcons"
export default function Profile() {
    return (
        <div className="main-profile-container">

            <p>اطلاعات هویتی</p>
            <div className="form-row">
                <InputComponent type="text" placeholder="نام و نام خانوادگی" />
                <InputComponent type="email" placeholder="پست الکترونیک" />

            </div>
            <div className="form-row">
                <div> <InputComponent type="password" placeholder="رمز عبور" /></div>
                <div><InputComponent type="password" placeholder="تکرار رمز عبور " /></div>

            </div>
            <div className="form-row">
                <div><InputComponent type="tel" placeholder="تلفن ثابت" /></div>
                <div><InputComponent type="tel" placeholder=" تلفن همراه" /></div>

            </div>
            <p>اطلاعات پستی</p>
            <div className="form-row">
                <div><InputComponent type="select" value={["خراسان", "گیلان", "تهران"]} placeholder="استان" /></div>
                <div><InputComponent type="select" value={["مشهد", "رشت", "تهران"]} placeholder="شهر" /></div>

            </div>
            <div className="form-row">
                <div><InputComponent type="textarea" placeholder="آدرس پستی " /></div>
            </div>
            <div className="form-row">

                <div>
                    <InputComponent type="text" placeholder="کدپستی " />
                    <a href="#1">
                        برای افزودن آدرس جدید کلیک کنید
                    </a>
                </div>
                <p>
                    لورم ایپسوم متن فارسی بی معنی و تصادفی مورد استفاده طراحان
                </p>

            </div>

            <p>اطلاعات بانکی</p>
            <div className="form-row">
                <div><InputComponent type="select" value={["ملت", "تجارت", "پاسارگاد"]} placeholder="بانک" /></div>
                <div><InputComponent type="text" placeholder="شماره کارت" /></div>

            </div>
            <div className="form-row">
                <div>
                    <InputComponent type="text" placeholder=" شبا" />
                    <a href="#2">
                        برای افزودن آدرس جدید کلیک کنید
                    </a>
                </div>
                <p>
                    لورم ایپسوم متن فارسی بی معنی و تصادفی مورد استفاده طراحان
                </p>

            </div>
            <button className="button-primary submit-btn">{saveUserInfo} ذخیره اطلاعات</button>
        </div>
    );
}