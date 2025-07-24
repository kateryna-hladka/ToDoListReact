import {nanoid} from '@reduxjs/toolkit'
import {dateTimeNow} from "../DateNow";

export type ItemDate = {
    id: string,
    name: string,
    categoryId?: number,
    finalDate?: string,
    completedDate?: string,
    status: boolean
};

type Item = {
    completedItems: ItemDate[],
    notCompletedItems: ItemDate[],
    loading: boolean
};
const initialState: Item = {completedItems: [], notCompletedItems: [], loading: false};

const Item = (state: Item = initialState, action): Item => {
    switch (action.type) {
        case 'GET_ITEMS':
        case 'ADD':
            return {...state, loading: true};
        case 'ADD_SUCCESS':
        case 'GET_COMPLETED_ITEMS_SUCCESS':
            return {...state, completedItems: action.payload.data, loading: false}
        case 'GET_NOT_COMPLETED_ITEMS_SUCCESS':
            return {...state, notCompletedItems: action.payload.data, loading: false}

        case 'CHANGE_STATUS':
            return {...state, loading: true}

        /*state.map((item: Item): Item => {
                if (item.id === action.payload.id) {
                    const newStatus: boolean = !item.status;
                    return {
                        ...item,
                        status: newStatus,
                        completedDate: newStatus ? dateTimeNow() : ""
                    };
                }
                return item;
            });*/
        default:
            return state;
    }
}

export default Item;