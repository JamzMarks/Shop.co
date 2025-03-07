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

export interface ProductCart{
    id: number,
    title: string
    price: number,
    image: string,
    discount: number,
    color: string,
    size: Size
}