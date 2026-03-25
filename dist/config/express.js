"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupExpressApp = setupExpressApp;
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("../routes/productRoutes"));
function setupExpressApp() {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.get('/', (req, res) => {
        res.status(200).json({
            message: "API de Dados Públicos Online!",
            version: "v1"
        });
    });
    app.use('/api/v1', productRoutes_1.default);
    app.use((req, res, next) => {
        res.status(404).json({
            message: "Rota não encontrada. Consulte a documentação da API."
        });
    });
    return app;
}
