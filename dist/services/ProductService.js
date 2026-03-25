"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const ProductRepository_1 = require("../repositories/ProductRepository");
class ProductService {
    constructor() {
        this.repository = new ProductRepository_1.ProductRepository();
    }
    create(data) {
        if (data.price <= 0) {
            throw new Error("O preço do produto deve ser maior que zero.");
        }
        if (data.stock < 0) {
            throw new Error("O estoque não pode ser negativo.");
        }
        return this.repository.create(data);
    }
    findAll() {
        return this.repository.findAll();
    }
    findById(id) {
        return this.repository.findById(id);
    }
    findByName(name) {
        if (!name || name.trim() === '') {
            return [];
        }
        return this.repository.findByName(name);
    }
    update(id, data) {
        if (data.price !== undefined && data.price <= 0) {
            throw new Error("O preço atualizado deve ser maior que zero.");
        }
        if (data.stock !== undefined && data.stock < 0) {
            throw new Error("O estoque atualizado não pode ser negativo.");
        }
        return this.repository.update(id, data);
    }
    delete(id) {
        return this.repository.delete(id);
    }
    count() {
        return this.repository.count();
    }
}
exports.ProductService = ProductService;
