import React, { useState } from "react";
import book from "../../images/dashboard/orderDetails/book.png"
import booksStatus from "../../images/dashboard/orderDetails/booksStatus.png"
import OrderDetailsTable from "./OrderDetailsTable"

export default function OrderDetails() {

  const [tableDetails] = useState([
    { image: book, title: "خودت را به فنا نده(گزی جان بیشاپ)", id: "i994-565566444877", price: "	45000 تومان" },
    { image: book, title: "خودت را به فنا نده(گزی جان بیشاپ)", id: "i994-565566444877", price: "	45000 تومان" },
    { image: book, title: "خودت را به فنا نده(گزی جان بیشاپ)", id: "i994-565566444877", price: "	45000 تومان" },
    { image: book, title: "خودت را به فنا نده(گزی جان بیشاپ)", id: "i994-565566444877", price: "	45000 تومان" },
  ]);
  return (
    <div className="content-section">
      <div className="dashboard-row-2">
        <div className="title">خلاصه وضعیت</div>

        <div className="main-book-status">
          <div className="img-status">
            <img src={booksStatus} className="bio-img" alt="" />
          </div>

          <div className="hidden-title">خلاصه وضعیت</div>

          <div className="book-status">
            <div className="book-status-details">
              <div className="book-status-details-row">
                <div className="details-row">
                  <span>شناسه فروش </span>
                  <span>44456987544</span>
                </div>
                <div className="details-row">
                  <span>تاریخ ثبت </span>
                  <span>1400/8/9</span>
                </div>
              </div>

              <div className="book-status-details-row">
                <div className="details-row">
                  <span>ارزش کتابهای اعلام شده </span>
                  <span>16000تومان</span>
                </div>
                <div className="details-row">
                  <span>ارزش کتابهای تایید شده </span>
                  <span>26000تومان</span>
                </div>
              </div>

              <div className="book-status-details-row">
                <div className="details-row">
                  <span>مبلغ پرداخت شده </span>
                  <span>1200تومان</span>
                </div>
                <div className="details-row">
                  <span>تاریخ ثبت </span>
                  <span>1400/8/9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OrderDetailsTable cells={tableDetails} />
    </div>
  );
}