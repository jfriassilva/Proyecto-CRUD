import {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import Formulario from '../componentes/Formulario'

const EditarPaciente= () => {
  const [paciente, setPaciente] = useState({})
  const [cargando, setCargando] = useState (true)
  const { id } = useParams()

  useEffect(() => {
      const obtenerPacientesAPI = async ()  => {
          try {
              const url = `http://localhost:4000/pacientes/${id}`
              const respuesta = await fetch (url)
              const resultado = await respuesta.json()

              setPaciente(resultado)

          } catch (error) {
              console.log(error)
          }
              setCargando(!cargando)
      }
      obtenerPacientesAPI()
  }, [])

  return (
    <>
    <h1 className="font-black text-4xl text-blue-900">Editar Paciente</h1>
    <p className="mt-3">Utiliza este formulario para editar datos de un paciente</p>

    <Formulario
        paciente={paciente}
      />
    </>
  )
}

export default EditarPaciente