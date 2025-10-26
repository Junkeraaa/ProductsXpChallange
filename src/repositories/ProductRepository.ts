import { Product, NewProduct } from '../models/Product';
import { v4 as uuidv4 } from 'uuid'; 

let products: Product[] = [
    { id: uuidv4(), name: "Notebook X", description: "Alto desempenho", price: 5000.00, stock: 15 },
    { id: uuidv4(), name: "Mouse Gamer Y", description: "Precisão elevada", price: 150.00, stock: 40 },
    { id: uuidv4(), name: "Monitor 4K Z", description: "Cores vibrantes", price: 1800.00, stock: 10 },
];


export class ProductRepository {

    public create(data: NewProduct): Product {
        const newProduct: Product = {
            id: uuidv4(),
            ...data
        };
        products.push(newProduct);
        return newProduct;
    }

    public findAll(): Product[] {
        return products;
    }

    public findById(id: string): Product | undefined {
        return products.find(p => p.id === id);
    }

    public findByName(name: string): Product[] {
        const searchName = name.toLowerCase();
        return products.filter(p => p.name.toLowerCase().includes(searchName));
    }

    public update(id: string, updateData: Partial<Product>): Product | undefined {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            return undefined;
        }

        const updatedProduct: Product = {
            ...products[index],
            ...updateData,
            id: products[index].id 
        };
        products[index] = updatedProduct;
        return updatedProduct;
    }

    public delete(id: string): boolean {
        const initialLength = products.length;
        products = products.filter(p => p.id !== id);
        return products.length < initialLength; // Retorna true se algo foi excluído
    }

    public count(): number {
        return products.length;
    }
}