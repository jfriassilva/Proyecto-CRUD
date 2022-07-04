import {useState , useEffect} from 'react'
import Paciente from '../componentes/Paciente'
import usuarioAxios from '../config/usuarioAxios'
const Inicio = () => {

  const [pacientes, setPacientes] = useState([])

useEffect(() => {
  const obtenerPacientes = async () => {
    try {
     const token = localStorage.getItem('token')
     if(!token) return

     const config = {
         headers: {
             "Content-Type": "application/json",
             Authorization: `Bearer ${token}`
         }
     }
     const { data } = await usuarioAxios('/pacientes', config) 
     setPacientes(data)

      } catch (error) {
        console.log(error)
      }
    }
    obtenerPacientes()
}, [])

  const handleEliminar = async id => {
    const confirmar = confirm('¿Deseas eliminar este paciente?')

    if(confirmar) {
      try {
        const url = `${import.meta.env.VITE_SOME_KEY}/${id}`
        const respuesta = await fetch(url, {
          method:'DELETE'
        })
         respuesta.json()

        const arrayPacientes = pacientes.filter( paciente => paciente.id !== id )
        setPacientes(arrayPacientes)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
    <h1 className="font-black text-4xl text-sky-600">Pacientes</h1>
    <p className="mt-3">Administra tus pacientes</p>

    <table className="w-full mt-5 table-auto shadow bg-white">
      <thead className='bg-sky-600 text-white'>
        <tr>
          <th className="p-2">Nombre</th>
          <th className="p-2">Contacto</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>

      <tbody>
          {pacientes.map( paciente => (
            <Paciente
              key={paciente._id}
              paciente={paciente}
              handleEliminar={handleEliminar}
            />
          ))}
      </tbody>
    </table>
    </>
  )
}

export default Inicio