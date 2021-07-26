import React from "react"
import logo from "../../images/dashboard/logo.png";
import { list } from "./SideBarList";

export default function Section(){
    
    return(
        <div className="dashboard-section">
            <img className="logo" src={logo} alt=""/>
            {list}
        </div>);
    
}