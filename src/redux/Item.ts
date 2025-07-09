import {nanoid} from '@reduxjs/toolkit'
import {dateTimeNow} from "../DateNow";

type Item = {
    id: string,
    name: string,
    categoryId?: number,
    finalDate?: string,
    completedDate?: string,
    status: boolean
};
const item: Item[] = [];

const Item = (state: Item[] = item, action): Item[] => {
    switch (action.type) {
        case 'ADD':
            return [...state, {
                id: nanoid(),
                name: action.payload.name,
                categoryId: action.payload.categoryId !== "" ? action.payload.categoryId : null,
                finalDate: action.payload.finalDate,
                status: false
            }];
        case 'CHANGE_STATUS':
            return state.map((item: Item): Item => {
                if (item.id === action.payload.id) {
                    const newStatus: boolean = !item.status;
                    return {
                        ...item,
                        status: newStatus,
                        completedDate: newStatus ? dateTimeNow() : ""
                    };
                }
                return item;
            });
        default:
            return state;
    }
}

export default Item;