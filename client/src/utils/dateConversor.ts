export function dateToText(date: Date): string{
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.toLocaleString('default', { month: 'long' });
    return `${month} ${day}, ${year}`
}