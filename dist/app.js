"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("./config/express");
const app = (0, express_1.setupExpressApp)();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[Server] Servidor rodando em http://localhost:${PORT}`);
    console.log(`[Arquitetura] Padrão MVC com Camadas: Controller -> Service -> Repository`);
    console.log(`[Endpoint Base] Acesso em http://localhost:${PORT}/api/v1/products`);
});
exports.default = app;
