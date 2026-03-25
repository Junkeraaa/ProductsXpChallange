"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const ProductService_1 = require("../services/ProductService");
const productService = new ProductService_1.ProductService();
class ProductController {
    async createProduct(req, res) {
        try {
            const product = productService.create(req.body);
            res.status(201).json(product);
        }
        catch (error) {
            res.status(400).json({ message: error instanceof Error ? error.message : "Erro ao criar produto." });
        }
    }
    async getProducts(req, res) {
        const { name } = req.query;
        let products;
        if (name && typeof name === 'string') {
            products = productService.findByName(name);
        }
        else {
            products = productService.findAll();
        }
        res.status(200).json(products);
    }
    async countProducts(req, res) {
        const count = productService.count();
        res.status(200).json({ total: count });
    }
    async getProductById(req, res) {
        const product = productService.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ message: "Produto não encontrado." });
        }
    }
    async updateProduct(req, res) {
        try {
            const updatedProduct = productService.update(req.params.id, req.body);
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            }
            else {
                res.status(404).json({ message: "Produto não encontrado para atualização." });
            }
        }
        catch (error) {
            res.status(400).json({ message: error instanceof Error ? error.message : "Erro ao atualizar produto." });
        }
    }
    async deleteProduct(req, res) {
        const wasDeleted = productService.delete(req.params.id);
        if (wasDeleted) {
            res.status(204).send();
        }
        else {
            res.status(404).json({ message: "Produto não encontrado para exclusão." });
        }
    }
}
exports.ProductController = ProductController;
