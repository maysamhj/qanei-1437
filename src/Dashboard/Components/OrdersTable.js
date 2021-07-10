import React from "react";

export default function OrdersTable(props) {
    return (
        <table className="tab-con" >
            <thead>
                <tr>
                    <th>شناسه</th>
                    <th>مبلغ</th>
                    <th>تاریخ</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.cells.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.price}</td>
                        <td>{item.date}</td>
                        <td><a href="#1">{item.details}</a></td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    );
}