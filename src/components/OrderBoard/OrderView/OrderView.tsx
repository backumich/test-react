import React from "react";
import {OrderItem} from "../OrderItem.tsx";

export default function OrderView({value, onRemoveOrder}: OrderViewParam) {
    return (
        <>
            <span> id: {value.id} </span>
            <span> Title: {value.title} </span>
            <span> Description: {value.description} </span>
            <span> Preview: {value.preview} </span>
            <span> Author: {value.author} </span>
            <button onClick={() => onRemoveOrder(value.id)}>Remove</button>
        </>
    );
}

interface OrderViewParam {
    value: OrderItem
    onRemoveOrder: (id: number) => void
}