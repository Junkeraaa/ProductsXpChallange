export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface NewProduct {
    name: string;
    description: string;
    price: number;
    stock: number;
}