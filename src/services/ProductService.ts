import { Product, NewProduct } from '../models/Product';
import { ProductRepository } from '../repositories/ProductRepository';

export class ProductService {
    private repository: ProductRepository;

    constructor() {
        this.repository = new ProductRepository();
    }


    public create(data: NewProduct): Product {
        if (data.price <= 0) {
            throw new Error("O preço do produto deve ser maior que zero.");
        }
        if (data.stock < 0) {
             throw new Error("O estoque não pode ser negativo.");
        }

        return this.repository.create(data);
    }

    public findAll(): Product[] {
        return this.repository.findAll();
    }

    public findById(id: string): Product | undefined {
        return this.repository.findById(id);
    }

    public findByName(name: string): Product[] {
        if (!name || name.trim() === '') {
            return [];
        }
        return this.repository.findByName(name);
    }

    public update(id: string, data: Partial<Product>): Product | undefined {
        if (data.price !== undefined && data.price <= 0) {
            throw new Error("O preço atualizado deve ser maior que zero.");
        }
        if (data.stock !== undefined && data.stock < 0) {
            throw new Error("O estoque atualizado não pode ser negativo.");
        }

        return this.repository.update(id, data);
    }

    public delete(id: string): boolean {
        return this.repository.delete(id);
    }

    public count(): number {
        return this.repository.count();
    }
}