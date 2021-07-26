import React from "react";
import logo from "../../images/dashboard/logo.png"
import { exitButton } from "../../SVGIcons";
import { list } from './SideBarList';
export default function DashboardModal(props) {

    const myModal = React.createRef();
    const modalContent = React.createRef();
    React.useEffect(() => {
        if (props.dashboard === true) {
            myModal.current.style.display = "block"
            setTimeout(() => myModal.current.classList.add("open"), 30);
        } else {

            myModal.current.classList.remove("open")
            setTimeout(() => myModal.current.style.display = "none", 300);
        }
        if (props.dashboard === true) {
            modalContent.current.style.display = "block"
            setTimeout(() => modalContent.current.classList.add("open"), 30);
        } else {

            modalContent.current.classList.remove("open")
            setTimeout(() => modalContent.current.style.display = "none", 300);
        }

    }, [props.dashboard])

    return (


        <div ref={myModal} className="summary-modal">
            <div ref={modalContent} className="modal-body">
                <div className="close button-secondary button-icon" id="close" onClick={props.hide}>{exitButton}</div>
                <div className="dashboard-section">
                    <img className="logo" src={logo} alt="" />
                    {list}
                </div>
            </div>
        </div>
    );
}