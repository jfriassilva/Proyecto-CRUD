import mongoose from "mongoose";

const crmPacientesSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
        required: true
    },
    paciente: {
        type: String,
        trim: true,
        required: true
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId ,
        ref: "Usuario",
    }
},{
    timesstamps: true,
});

const crmPacientes = mongoose.model("crmPacientes", crmPacientesSchema);

export default crmPacientes;