import React from 'react';
import {footerTelIcon, footerEmailIcon} from './SVGIcons';

export default function FooterSection() {
  return (
    <div className="footer-section">
        <div className="top-curve"></div>
        <div className="content">
            <div className="container">
                <div className="footer-box">
                    <div>
                        <h3>با ما در تماس باشید</h3>
                        <p>
                            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>
                    </div>
                    <div>
                        <h4>
                            پیوندهای مفید
                        </h4>
                        <ul>
                            <li><a href="#i">درباره ما</a></li>
                            <li><a href="#i">تماس با ما</a></li>
                            <li><a href="#i">پشتیبانی</a></li>
                        </ul>
                    </div>
                    <div className="contact-list">
                        <h4>
                            اطلاعات تماس
                        </h4>
                        <ul dir="ltr">
                            <li>{footerTelIcon} 021- 123456789</li>
                            <li>{footerEmailIcon} info@rebox.com</li>
                            <li>{footerEmailIcon} sales@rebox.com</li>
                        </ul>
                    </div>
                </div>
                <div className="copy-right">
                    کلیه حقوق مادی و معنوی این وبسایت متعلق به <b>ریباکس</b> می باشد. 
                </div>
            </div>
        </div>
    </div>
  );
}