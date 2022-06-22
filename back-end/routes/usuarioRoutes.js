import express from "express";
const router = express.Router();
import { registrar } from '../controllers/usuarioController.js';

// Creacion, Registro y Confirmacion de usuarios
router.post( "/", registrar);

export default router;