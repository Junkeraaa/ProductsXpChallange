import { setupExpressApp } from './config/express';

const app = setupExpressApp();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`[Server] Servidor rodando em http://localhost:${PORT}`);
    console.log(`[Arquitetura] Padrão MVC com Camadas: Controller -> Service -> Repository`);
    console.log(`[Endpoint Base] Acesso em http://localhost:${PORT}/api/v1/products`);
});

export default app;