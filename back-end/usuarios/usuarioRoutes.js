import express from "express";
const router = express.Router();
import { registrar } from './usuarioController.js';

// Creacion, Registro y Confirmacion de usuarios
router.post( "/", registrar);
router.post("/login", autenticar)

export default router;