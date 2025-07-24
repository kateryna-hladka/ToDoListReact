import {ofType} from "redux-observable";
import {switchMap, map} from "rxjs/operators";
import {from, of} from "rxjs";

const fetchCategoryEpic = action$ => action$.pipe(
    ofType("GET"),
    switchMap(() =>
        from(
            fetch("https://localhost:7227/graphql", {
                method: "POST",
                headers: {"Content-Type": "application/json", 'GraphQL-Require-Preflight': 'true'},
                body: JSON.stringify({
                    query: `query {
                              categories {
                                id
                                name
                              }
                            }`,
                }),
            }).then((res) => res.json())
        ).pipe(
            map((response) => (
                {type: "GET_SUCCESS", payload: {data: response.data.categories}}
            ))
        )
    )
);

export default fetchCategoryEpic;
