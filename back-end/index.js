import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./usuarios/usuarioRoutes.js"
import pacientesRoutes from "./crmpacientes/pacientesRoutes.js";

const app = express();
app.use(express.json());

dotenv.config(); 

conectarDB();

// Routing
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pacientes", pacientesRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>{
    console.log(`Servidor corriendo en ${PORT}`);
});
