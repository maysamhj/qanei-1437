import React from "react"
import DashboardModal from "./DashboardModal";
import logo from "../../images/dashboard/logo.png"
import dashboardIcon from "../../images/dashboard/dashboard-icon.png"
import {dashboardHeader1, dashboardHeader2, dashboardHeader3} from "../../SVGIcons"
import UserDashboardAlert from "./UserDashboardAlert";
export default function DashboardHeader(props){

    const [dashboard, setdashboard]= React.useState(false)
    const dashboardModalHandler= ()=> {
     
        setdashboard(!dashboard)
    }
    const [dashboardAlert, setdashboardAlert]= React.useState(false)
    const UdashboardAlertlHandler= ()=> {
     
        setdashboardAlert(!dashboardAlert)
    }

    let dashboardTitle;
    switch(props.type){
        case "userDashboard" : 
        dashboardTitle = "داشبورد کاربر";
   
        break;
        
        case "profile" :
       
          dashboardTitle = "اطلاعات کاربری";
       break;
       case "support" :
       
          dashboardTitle = "پشتیبانی سیستم";
       break;
       case "orders" :
       
        dashboardTitle = "سوابق کاربر";
     break;
     case "orderDetails" :
       
        dashboardTitle = "جزییات فروش";
     break;
       default:
         

    }

    return(
    
        <div className="header-section-2">
            <DashboardModal dashboard={dashboard} hide={dashboardModalHandler}/>
            <UserDashboardAlert dashboardAlert={dashboardAlert} hideAlert={UdashboardAlertlHandler}/>   
            <div className="flex-1">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <p>{dashboardTitle}</p>
                </div>
            </div>
  
            <div className="btn-section">
  
                <button className="hidden-btn button-secondary submit-btn" style={{display: "none"}} onClick={dashboardModalHandler}><img src={dashboardIcon} alt=""/></button>
                <button className="button-secondary submit-btn" onClick={UdashboardAlertlHandler}>
                    {dashboardHeader1} 
                </button>
  
                <button className="button-secondary submit-btn">
                {dashboardHeader2} 
                </button>
                <button className="button-primary submit-btn">
                {dashboardHeader3} <p>خروج از حساب</p></button>
  
            </div>
        </div>
    
  );
}

 