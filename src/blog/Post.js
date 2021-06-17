import React from "react";

import {likeIcon, commentIcon} from "./../SVGIcons"

export default function Post(props){
    
    return (
        <div className="post-body">
            <div className="post-image">
              <img src={props.postImage} alt=""/> 
            </div>
            <div className="post-detail">
                <p>ورم ایپسوم متن ساختگی با تولید سادگی  </p>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                </p>
                <div className="post-detail-footer">
                     <div className="post-detail-footer-date">شنبه 21 اردیبهشت</div>
                        <div className='badge-container'>{commentIcon}
                            <div className="badge">{props.commentNum}</div>
                        </div> 
                        <div className={"badge-container"  + (props.like ? " liked" : "")}>{likeIcon}
                            <div className="badge">{props.likeNum}</div>
                        </div>      
                </div>    
            </div>
        </div>
    );
}