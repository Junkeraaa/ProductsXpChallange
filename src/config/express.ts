import express, { Application } from 'express';
import productRoutes from '../routes/productRoutes';

export function setupExpressApp(): Application {
    const app: Application = express();

    app.use(express.json());
    app.get('/', (req, res) => {
        res.status(200).json({ 
            message: "API de Dados Públicos Online!", 
            version: "v1" 
        });
    });

    app.use('/api/v1', productRoutes);

    app.use((req, res, next) => {
        res.status(404).json({ 
            message: "Rota não encontrada. Consulte a documentação da API." 
        });
    });

    return app;
}