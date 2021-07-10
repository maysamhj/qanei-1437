import React from "react";
import SideBar from "./Components/SideBar";
import UserDashboard from "./Components/UserDashboard";
import DashboardHeader from "./Components/DashboardHeader";
import Profile from "./Components/Profile"
import Support from "./Components/Support"
import Orders from "./Components/Orders"
import OrderDetails from "./Components/OrderDetails"


export default function Dashboard(props) {

  const dashboardSelector = (type) => {
    let dashboardTitle;

    switch (type) {
      case "userDashboard":
        dashboardTitle = "داشبورد کاربر";

        break;

      case "profile":

        dashboardTitle = "اطلاعات کاربری";
        break;
      case "orders":

        dashboardTitle = "سوابق کاربر";
        break;
      case "orderDetails":

        dashboardTitle = "جزییات فروش";
        break;
      default:


    }

    return (
      <div>
        <div className="hidden-header">{dashboardTitle}</div>
        {type === "userDashboard" ? <UserDashboard /> : null}
        {type === "profile" ? <Profile /> : null}
        {type === "support" ? <Support /> : null}
        {type === "orders" ? <Orders /> : null}
        {type === "orderDetails" ? <OrderDetails /> : null}
      </div>
    );
  };
  React.useEffect(() => {
    document.querySelector(".container").classList.add("dashboard")
  }, [])
  return (
    <div className="dashboard-container">

      <SideBar />
      <div className="container-section">
        <DashboardHeader type={props.type} />


        {dashboardSelector(props.type)}
      </div>
    </div>
  );
}
