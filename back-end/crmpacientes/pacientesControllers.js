import Paciente from "./Pacientes.js";


const obtenerPacientes = async (req, res) => {

};
const nuevoPaciente = async (req, res) => {
    const paciente = new Paciente(req.body)
    paciente.creador = req.usuario._id

    try {
        const pacienteAlmacenado = await paciente.save()
        res.json(pacienteAlmacenado);
    } catch (error) {
        console.log(error);
    }
};

const obtenerPaciente = async (req, res) => {

};
const editarPaciente = async (req, res) => {

};
const eliminarPaciente = async (req, res) => {

};

export {obtenerPacientes, nuevoPaciente, obtenerPaciente, editarPaciente, eliminarPaciente};