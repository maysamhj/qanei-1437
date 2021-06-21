import React from "react";
import { commentIcon, likeIcon, sendIcon } from "../SVGIcons";
import PostImg1 from "./../images/single-post/bg1.png";
import PostImg2 from "./../images/single-post/bg2.png";
import profilePic from "./../images/single-post/profile.png";
import zalam1 from "./../images/single-post/zalam1.png";
import zalam2 from "./../images/single-post/zalam2.png";
import zalam3 from "./../images/single-post/zalam3.png";
import zalam4 from "./../images/single-post/zalam4.png";

export default function SinglePost() {

    const comments = [
        {
            username: "امیرحسین انصاری",
            title: "گرافیست",
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد",
            likes: 5,
            date: "شنبه 21 اردیبهشت",
            replys: [
                {
                    username: "امیرحسین انصاری",
                    title: "گرافیست",
                    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد",
                    likes: 5,
                    date: "شنبه 21 اردیبهشت",
                },
                {
                    username: "امیرحسین انصاری",
                    title: "گرافیست",
                    body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد",
                    likes: 5,
                    date: "شنبه 21 اردیبهشت",
                },
            ]
        },
        {
            username: "امیرحسین انصاری",
            title: "گرافیست",
            body: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است. جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد",
            likes: 5,
            date: "شنبه 21 اردیبهشت",
            replys: []
        },
    ]



    return (
        <div className="single-post-con">
            <div className="header-img"></div>
            <div className="single-post">
                <img className="circle3" src={zalam1} alt="" />
                <img className="circle2" src={zalam2} alt="" />
                <img className="circle" src={zalam3} alt="" />
                <img className="curve" src={zalam4} alt="" />
                <div className="main-body">
                    <h2>لورم اسلیم متن ساختگی با تولید سادگی</h2>
                    <div>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                            شناخت فراوان جامعه و متخصصان را می طلبد،
                            تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
                            و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                            و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    <div className="cropped-img" style={{ backgroundImage: `url(${PostImg1})` }}></div>
                    <div>
                        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                            شناخت فراوان جامعه و متخصصان را می طلبد،
                            تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
                            و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                            و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>

                    <div className="img-paragraph">
                        <div className="main-image">
                            <div className="cropped-img inline" style={{ backgroundImage: `url(${PostImg2})` }}></div>
                        </div>
                        <div className="main-paraghraph"><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
                            شناخت فراوان جامعه و متخصصان را می طلبد،
                            تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی،
                            و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها،
                            و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                            و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="like-comment">
                        <div className="tags">
                            <ul>
                                <li><a href="#1">محیط زیست</a></li>
                                <li><a href="#1">انسان</a></li>
                                <li><a href="#1">موجودات</a></li>
                                <li><a href="#1">دریا</a></li>
                            </ul>
                        </div>
                        <div className="date-like">
                            <div className="date"><p>شنبه 21 اردیبهشت</p></div>
                            <div className="icons">
                                <div className="comments">
                                    <p>5</p>
                                    {commentIcon}
                                </div>
                                <div className="likes liked">
                                    <p>5</p>
                                    {likeIcon}
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="textarea">
                        <label>نظر بگذارید</label>
                        <textarea placeholder="متن نظر شما"></textarea>
                    </div>
                    <button className="send-btn button-primary submit-btn">{sendIcon} ارسال</button>
                    <div className="shared-comments">
                        {
                            comments.map((comment, index) => (
                                <div key={"comment-" + index}>
                                    <div className="question">
                                        <div className="profile">
                                            <img src={profilePic} alt=""/>
                                            <div className="profile-info">
                                                <p>{comment.username}</p>
                                                <hr />
                                                <div className="one-line">
                                                    <p className="paragraph">{comment.title}</p>
                                                    <p>{comment.date}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p>{comment.body}</p>
                                        </div>
                                        <div className="icons">
                                            <div className="comments">
                                                <p>{comment.likes}</p>
                                                {likeIcon}
                                            </div>
                                            <div className="likes">
                                                <p>{comment.replys.length}</p>
                                                {commentIcon}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="answers">
                                        <div className="vl"></div>
                                        <div className="answer-container">
                                        {
                                            comment.replys.map((reply, innerIndex) => (
                                                
                                                    <div key={"reply-" + index + "-" + innerIndex} className="question">
                                                        <div className="profile">
                                                            <img src={profilePic} alt=""/>
                                                            <div className="profile-info">
                                                                <p>{reply.username}</p>
                                                                <hr />
                                                                <div className="one-line">
                                                                    <p className="paragraph">{reply.title}</p>
                                                                    <p>{reply.date}</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <p>{reply.body}</p>
                                                        </div>

                                                        <div className="icons">

                                                            <div className="likes">
                                                                <p>{reply.likes}</p>
                                                                {likeIcon}
                                                            </div>
                                                        </div>
                                                    </div> 
                                            ))
                                        }
                                        
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>
        </div>

    );
}