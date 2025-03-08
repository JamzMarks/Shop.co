export function sliceArr<T>(arr: T[], max: number): T[]{
    const newArr = arr.slice(0, max);
    return newArr
}