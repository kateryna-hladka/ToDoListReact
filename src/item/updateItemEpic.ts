import {ofType} from "redux-observable";
import {switchMap, map} from "rxjs/operators";
import fetchWrapper from "../fetchWrapper";

const updateItemEpic = action$ => action$.pipe(
    ofType("CHANGE_STATUS"),
    switchMap((action: any) =>
        fetchWrapper(
            `mutation($id: Int!, $status: Boolean){
                         updateItem(id: $id, status: $status){
                           id
                           name
                           finalDate
                           completedDate
                           status
                           category {name}
                         }
                       }`, {
                id: +action.payload.id,
                status: action.payload.status === "true",
            })
            .pipe(
                map((response) => (
                        {type: "CHANGE_STATUS_SUCCESS", payload: {data: response.data.updateItem}}
                    )
                )
            )
    )
);

export default updateItemEpic;
