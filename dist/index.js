"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || "3000";
const MESSAGE = process.env.MESSAGE || "Hello from CI/CD demo. This is Zumar Afzal, an Engineering Intern at Tkxel. I done Bachelor's of Computer Engineering from NUST.";
app.get("/", (_req, res) => {
    res.json({ ok: true, message: MESSAGE });
});
app.listen(Number(PORT), () => {
    console.log(`[server] running on http://localhost:${PORT}`);
});
