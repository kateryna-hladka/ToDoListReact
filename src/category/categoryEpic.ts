import {ofType} from "redux-observable";
import {switchMap, map} from "rxjs/operators";
import fetchWrapper from "../fetchWrapper";

const categoryEpic = action$ => action$.pipe(
    ofType("GET"),
    switchMap(() =>
        fetchWrapper(
            `query {
                     categories {
                       id
                       name
                     }
                   }`, null)
            .pipe(
                map((response) => (
                    {type: "GET_SUCCESS", payload: {data: response.data.categories}}
                ))
            )
    )
);

export default categoryEpic;
