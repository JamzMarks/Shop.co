import { Size } from "./size-type";

export interface Product{
    id: number,
    title: string
    price: number,
    image: string[],
    discount: number,
    rating: number,
    description: string,
    color: string[],
    size: Size[]
}