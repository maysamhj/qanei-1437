import React from "react";

export default function OrderDetailsTable(props) {
    return (
        <div className="books-library">
            <table className="table">
                <tbody>
                    {props.cells.map((item, index) => (

                        <tr key={index}>
                            <td><img src={item.image} alt=""/></td>
                            <td>{item.title}</td>
                            <td>{item.id}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}