import React, {useState} from "react";
import OrderBoard from "./components/OrderBoard/OrderBoard.tsx";
import {OrderItem} from "./components/OrderBoard/OrderItem.tsx";
import OrderForm from "./components/OrderForm/OrderForm.tsx";
import Footer from "./components/Footer/Footer.tsx";

export default function App() {
    let initialState: OrderItem[] = [
        {id: 1, title: 'burger', author: 'Dima'},
        {id: 2, title: 'Pizza', author: 'Den'}
    ];
    const [orders, setOrders] = useState(initialState)

    function addOrder(newItem: OrderItem) {
        const result = [
            ...orders,
            newItem
        ]
        setOrders(result)
    }

    function removeOrder(id: number) {
        setOrders(orders.filter(order => order.id !== id))
    }

    return (
        <>
            <h2>Orders</h2>
            <OrderBoard
                orders={orders}
                onRemoveOrder={removeOrder}
            />
            <hr/>
            <h2>New order</h2>
            <OrderForm onAddOrder={addOrder}/>
            <Footer />
        </>
    );
}