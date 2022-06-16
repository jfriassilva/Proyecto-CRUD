import React from 'react'
import Formulario from '../componentes/Formulario'

const NuevoPaciente = () => {
  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Nuevo Paciente</h1>
    <p className="mt-3">Llena los siguientes campos para registrar un paciente</p>

    <Formulario/>
    </>
  )
}

export default NuevoPaciente