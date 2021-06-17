import React from "react";
import Post from "./Post";
import PaginationRounded from "./paginationRounded";

import blogHeaderImg from "./../images/Blog/blog-header.png";
import postImg1 from "./../images/Blog/Post/img-1.png";
import postImg2 from "./../images/Blog/Post/img-2.png";
import postImg3 from "./../images/Blog/Post/img-3.png";
import postImg4 from "./../images/Blog/Post/img-4.png";
import postImg5 from "./../images/Blog/Post/img-5.png";
import postImg6 from "./../images/Blog/Post/img-6.png";

import zalam1 from "./../images/Blog/zalam-1.png";
import zalam2 from "./../images/Blog/zalam-2.png";

export default function Blog(){

    let blogImages=[postImg1, postImg2, postImg3,
         postImg4, postImg5, postImg6]
        
    return (
        <div className="blog">
            <div className="zalam zalam-1">
                <img src={zalam1} alt="" />
            </div>
            <div className="zalam zalam-2">
                <img src={zalam2} alt="" />
            </div>
            <div className="blog-header">
                <img src={blogHeaderImg} alt=""/>
                <p>وبلاگ ریباکس</p>
            </div>
            <div className="bolg-body">
               {blogImages.map((image, index)=><Post postImage={image} likeNum={0} commentNum={0} key={index}/>)}
            </div>
            <div className="blog-pagination" dir="ltr">
                <PaginationRounded/>
            </div>
            
            <div>

            </div>
        </div>
    );
}