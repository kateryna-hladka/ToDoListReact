import {from, Observable} from "rxjs";

const graphqlUrl = "https://localhost:7227/graphql";
export default function fetchWrapper(query: string, variables?: {}): Observable<any> {
       return from(
            fetch(graphqlUrl, {
                method: "POST",
                headers: {"Content-Type": "application/json", 'GraphQL-Require-Preflight': 'true', 'storage': localStorage.getItem('storage')},
                body: JSON.stringify({
                    query: query, variables: variables
                }),
            }).then(res => res.json())
        )
}