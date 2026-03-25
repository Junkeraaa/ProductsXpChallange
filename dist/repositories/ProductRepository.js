"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const uuid_1 = require("uuid");
let products = [
    { id: (0, uuid_1.v4)(), name: "Notebook X", description: "Alto desempenho", price: 5000.00, stock: 15 },
    { id: (0, uuid_1.v4)(), name: "Mouse Gamer Y", description: "Precisão elevada", price: 150.00, stock: 40 },
    { id: (0, uuid_1.v4)(), name: "Monitor 4K Z", description: "Cores vibrantes", price: 1800.00, stock: 10 },
];
class ProductRepository {
    create(data) {
        const newProduct = {
            id: (0, uuid_1.v4)(),
            ...data
        };
        products.push(newProduct);
        return newProduct;
    }
    findAll() {
        return products;
    }
    findById(id) {
        return products.find(p => p.id === id);
    }
    findByName(name) {
        const searchName = name.toLowerCase();
        return products.filter(p => p.name.toLowerCase().includes(searchName));
    }
    update(id, updateData) {
        const index = products.findIndex(p => p.id === id);
        if (index === -1) {
            return undefined;
        }
        const updatedProduct = {
            ...products[index],
            ...updateData,
            id: products[index].id
        };
        products[index] = updatedProduct;
        return updatedProduct;
    }
    delete(id) {
        const initialLength = products.length;
        products = products.filter(p => p.id !== id);
        return products.length < initialLength; // Retorna true se algo foi excluído
    }
    count() {
        return products.length;
    }
}
exports.ProductRepository = ProductRepository;
