import React from "react";
import dashboardAlert from "../../images/dashboard/dashboard-alert.png"
import { userProfile, exitButton } from "../../SVGIcons"

export default function UserDashboardAlert(props) {

    const alertModal = React.createRef();
    const alertBody = React.createRef();
    React.useEffect(() => {
        if (props.dashboardAlert === true) {
            alertModal.current.style.display = "block"
            setTimeout(() => alertModal.current.classList.add("alert-modal"), 30);
        } else {

            alertModal.current.classList.remove("alert-modal")
            setTimeout(() => alertModal.current.style.display = "none", 300);
        }
        if (props.dashboardAlert === true) {
            alertBody.current.style.display = "block"
            setTimeout(() => alertBody.current.classList.add("alert-modal"), 30);
        } else {

            alertBody.current.classList.remove("alert-modal")
            setTimeout(() => alertBody.current.style.display = "none", 300);
        }

    }, [props.dashboardAlert])
    return (
        <div ref={alertModal} className="summary-modal">
            <div ref={alertBody} className="modal-body alert">
                <img src={dashboardAlert} alt="" />
                <button className="button-icon button-secondary close" onClick={props.hideAlert} >{exitButton}</button>
                <p>اطلاعات کاربری شما ناقص است</p>
                <p>متاسفانه شما هنوز اطلاعات کاربری خود را تکمیل نکرده اید. لطفا برای ادامه مراحل فروش به پروفایل
                    .خود مراجعه کرده و اقدام به تکمیل اطلاعات خود نمایید</p>
                <button className="button-primary submit-btn">{userProfile} پروفایل کاربری</button>

            </div>
        </div>
    );
}