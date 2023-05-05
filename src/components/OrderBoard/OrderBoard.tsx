import React from "react";
import OrderView from "./OrderView/OrderView.tsx";
import {OrderItem} from "./OrderItem.tsx";

export default function OrderBoard({orders, onRemoveOrder}: OrderBoardProps) {
    return (
        <div id='order-board'>
            {orders?.map(
                (order) => {
                    return (
                        <div id='order' key={String(order.id)}>
                            <OrderView
                                value={order}
                                onRemoveOrder={onRemoveOrder}
                            />
                        </div>
                    );
                }
            )}
        </div>
    );
}

interface OrderBoardProps {
    orders: OrderItem[],
    onRemoveOrder: (id: number) => void
}