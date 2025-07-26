import { Injectable } from '@angular/core';

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}

@Injectable()
export class ProductService {

    private products: Product[] = [
        { id: 1, name: 'Laptop', price: 1500, description: 'High performance laptop' },
        { id: 2, name: 'Phone', price: 800, description: 'Latest smartphone' },
        { id: 3, name: 'Headphones', price: 150, description: 'Noise-cancelling headphones' },
    ];

    constructor() { }

    getAllProducts(): Product[] {
        return this.products;
    }

    getProductById(id: number): Product | undefined {
        return this.products.find(product => product.id === id);
    }
}
