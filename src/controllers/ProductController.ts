import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

const productService = new ProductService();

export class ProductController {

    public async createProduct(req: Request, res: Response): Promise<void> {
        try {
            const product = productService.create(req.body);
            res.status(201).json(product);
        } catch (error) {

            res.status(400).json({ message: error instanceof Error ? error.message : "Erro ao criar produto." });
        }
    }

    public async getProducts(req: Request, res: Response): Promise<void> {
        const { name } = req.query;
        let products;
        
        if (name && typeof name === 'string') {
            products = productService.findByName(name); 
        } else {
            products = productService.findAll();
        }
        
        res.status(200).json(products);
    }
    
    public async countProducts(req: Request, res: Response): Promise<void> {
        const count = productService.count();
        res.status(200).json({ total: count });
    }

    public async getProductById(req: Request, res: Response): Promise<void> {
        const product = productService.findById(req.params.id);
        
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: "Produto não encontrado." });
        }
    }

    public async updateProduct(req: Request, res: Response): Promise<void> {
        try {
            const updatedProduct = productService.update(req.params.id, req.body);
            
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: "Produto não encontrado para atualização." });
            }
        } catch (error) {
            res.status(400).json({ message: error instanceof Error ? error.message : "Erro ao atualizar produto." });
        }
    }

    public async deleteProduct(req: Request, res: Response): Promise<void> {
        const wasDeleted = productService.delete(req.params.id);
        
        if (wasDeleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Produto não encontrado para exclusão." });
        }
    }
}