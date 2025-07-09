let today: Date = new Date();
let year: number = today.getFullYear();
let month: string = toStringFormat(today.getMonth() + 1);
let day: string = toStringFormat(today.getDate());
export const dateNow: string = `${year}-${month}-${day}`;

export function dateTimeNow(): string {
    let today: Date = new Date();
    let hours: string = toStringFormat(today.getHours());
    let minutes: string = toStringFormat(today.getMinutes());
    let seconds: string = toStringFormat(today.getSeconds());
    let milliseconds: number = today.getMilliseconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}`;
}

function toStringFormat(value: number): string {
    return (value < 10 ? '0' : '') + value;
}

