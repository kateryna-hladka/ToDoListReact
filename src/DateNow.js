let today = new Date();
let year = today.getFullYear();
let month = toDoubleFormat(today.getMonth() + 1);
let  day =  toDoubleFormat(today.getDate());
export const dateNow =`${year}-${month}-${day}`;

export function dateTimeNow() {
    let today = new Date();
    let hours = toDoubleFormat(today.getHours());
    let minutes = toDoubleFormat(today.getMinutes());
    let seconds = toDoubleFormat(today.getSeconds());
    let milliseconds = today.getMilliseconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function toDoubleFormat(value){
    return String(value).padStart(2, '0');
}

