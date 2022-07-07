import {useState , useEffect} from 'react'
import Paciente from '../componentes/Paciente'
import usuarioAxios from '../config/usuarioAxios'
// import usePacientes from '../hooks/usePacientes'
// import Alerta from '../componentes/Alerta'


const Inicio = () => {

  const [pacientes, setPacientes] = useState([])
  // const { alerta } = usePacientes()

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

// const { msg } = alerta

  return (
    <>
    <h1 className="font-black text-4xl text-sky-600">Pacientes</h1>
    <p className="mt-3">Administra tus pacientes</p>

    {/* <div>
        {msg && <Alerta alerta={alerta} /> }
    </div> */}

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
            />
          ))}
      </tbody>
    </table>
    </>
  )
}

export default Inicio