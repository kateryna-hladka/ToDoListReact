import {ofType} from "redux-observable";
import {switchMap, mergeMap} from "rxjs/operators";
import fetchWrapper from "./fetchWrapper";

const itemListEpic = action$ => action$.pipe(
    ofType("GET_ITEMS"),
    switchMap(() =>
        fetchWrapper(
            `query{
                     notCompletedItems {
                       id
                       name
                       finalDate
                       category{ name }
                     }
                     completedItems{
                       id
                       name
                       completedDate
                       category{ name }
                     }
                   }`, null)
            .pipe(
                mergeMap((response) => [
                    {type: "GET_COMPLETED_ITEMS_SUCCESS", payload: {data: response.data.completedItems}},
                    {type: "GET_NOT_COMPLETED_ITEMS_SUCCESS", payload: {data: response.data.notCompletedItems}}]
                )
            )
    )
);

export default itemListEpic;
