import "whatwg-fetch";
import "es6-promise";

export function get(url) {
    return fetch(url, {
        method: "GET",
        credentials: "include",
        headers: {
            "Accept": "application/json, text/plain, */*"
        }
    });
}

function obj2params(obj) {
    let result = "";
    for (const item in obj) {
        result += "&" + item + "=" + encodeURIComponent(obj[item]);
    }

    result = result ? result.slice(1) : "";
}

export function post(url, paramsObj) {
    return fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramsObj)
    });
}