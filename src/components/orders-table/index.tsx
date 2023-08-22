import React from 'react';
import './styles.scss';
import { orderData } from '../../data/data';
import { BiCaretDown } from 'react-icons/bi';

export const OrdersTable = (): JSX.Element => {
  return (
    <div className="orders">
      <table>
        <tr className="table_categories">
            <th>Order</th>
            <th>Date <BiCaretDown /></th>
            <th>Customer</th>
            <th>Total <BiCaretDown /></th>
            <th>Status <BiCaretDown /></th>
            <th>Items</th>
            <th>Delivery</th>
        </tr>
        {orderData.map((order) => (
            <tr className="table_data">
                <th>{order.orderNumber}</th>
                <th>{order.date}</th>
                <th>{order.customerName}</th>
                <th>{order.total}</th>
                <th>{order.status}</th>
                <th>{order.items}</th>
                <th>{order.delivery}</th>
            </tr>
        ))}
      </table>
    </div>
  );
}