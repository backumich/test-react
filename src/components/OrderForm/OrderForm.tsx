import React, {FormEvent, useState} from "react";
import {OrderItem} from "../OrderBoard/OrderItem.tsx";

export default function OrderForm({onAddOrder}: OrderFormParams) {
    const [orderItem, setOrderItem] = useState({} as OrderItem)

    const changeId = (id: string) => {
        const idAsNumber = Number(id)
        setOrderItem(
            {
                ...orderItem,
                id: idAsNumber
            }
        )
    }

    const changeTextVal = (fieldName: string, value: string) => {
        const result = {
            ...orderItem,
            [fieldName]: value
        }
        setOrderItem(result)

    }

    function submit(e: FormEvent) {
        e.preventDefault()
        onAddOrder(orderItem)
        setOrderItem({} as OrderItem)
    }

    return (
        <form onSubmit={e => submit(e)}>
            <label htmlFor='id'>id:</label>
            <input type="number" id='id' value={orderItem.id || ''}
                   onChange={(event) => changeId(event.target.value)}/>
            <label htmlFor='title'>Title:</label>
            <input type="text" id='title' value={orderItem.title || ''}
                   onChange={(event) => changeTextVal("title", event.target.value)}/>
            <label htmlFor='description'>Description:</label>
            <textarea rows={3} id='description' value={orderItem.description || ''}
                      onChange={(event) => changeTextVal("description", event.target.value)}/>
            <label htmlFor='preview'>Preview:</label>
            <input type="text" id='preview' value={orderItem.preview || ''}
                   onChange={(event) => changeTextVal("preview", event.target.value)}/>
            <label htmlFor='author'>Author:</label>
            <input type="text" id='author' value={orderItem.author || ''}
                   onChange={(event) => changeTextVal("author", event.target.value)}/>
            <button type='submit'>Place Order</button>
        </form>
    );

}

interface OrderFormParams {
    onAddOrder: (item: OrderItem) => void
}

// enum OrderItemFields {
// "id", "title","description", "preview", "author"
// }
