import {ofType} from "redux-observable";
import {switchMap, map} from "rxjs/operators";
import fetchWrapper from "./fetchWrapper";

const addItemEpic = action$ => action$.pipe(
    ofType("ADD"),
    switchMap((action: any) =>
        fetchWrapper(
            `mutation($name: String!, $categoryId: Int, $finalDate: DateTime){
                     createItem(name: $name, categoryId: $categoryId, finalDate: $finalDate){
                       id
                       name
                       finalDate
                       completedDate
                       status
                       category {name}
                     }
                   }`, {
                name: action.payload.name,
                categoryId: action.payload.categoryId !== "" ? +action.payload.categoryId : null,
                finalDate: action.payload.finalDate !== "" ? new Date(action.payload.finalDate) : null,
            })
            .pipe(
                map((response) => (
                        {type: "ADD_SUCCESS", payload: {data: response.data.createItem}}
                    )
                )
            )
    )
);

export default addItemEpic;
