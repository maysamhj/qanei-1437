import React, { useRef, useState } from "react";
import OrdersTable from "./OrdersTable";

export default function Orders() {
    const [tableCells] = useState([
        { id: "56676677456878", price: "125000", date: "1400/3/22", details: "مشاهده جزییات" },
        { id: "56676677456878", price: "125000", date: "1400/3/22", details: "مشاهده جزییات" },
        { id: "56676677456878", price: "125000", date: "1400/3/22", details: "مشاهده جزییات" },
    ])
    const tab1 = useRef();
    const tab2 = React.createRef();
    const [Tab, setTab] = React.useState("1")
    const tab1Handler = () => {
        setTab("1");
        tab1.current.style.display = "block";
        tab2.current.style.display = "none";
    }

    const tab2Handler = () => {
        setTab("2");
        tab2.current.style.display = "block";
        tab1.current.style.display = "none";
    }


    return (
        <div className="content-section">
            <div className="all-btn">
                <button id="tab-1" className={"btn" + (Tab === "1" ? " selected" : "")} onClick={tab1Handler}>اعلام شده</button>
                <button id="tab-2" className={"btn" + (Tab === "2" ? " selected" : "")} onClick={tab2Handler}>وصول شده</button>
            </div>
            <div className="all-table" >
                <div className="table-container" ref={tab1}>

                    <OrdersTable cells={tableCells} />
                </div>
                <div className="table-container" ref={tab2}>
                    <OrdersTable cells={tableCells} />
                </div>
            </div>
        </div>
    );
}