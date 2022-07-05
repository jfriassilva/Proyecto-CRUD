// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import FormularioPaciente from "../componentes/FormularioPaciente";

// const EditarPaciente = () => {
//   const [paciente, setPaciente] = useState({});
//   const [cargando, setCargando] = useState(true);
//   const { id } = useParams();
 
//   useEffect(() => {
//     const obtenerPacientes = async () => {
//       try {
//        const token = localStorage.getItem('token')
//        if(!token) return
  
//        const config = {
//            headers: {
//                "Content-Type": "application/json",
//                Authorization: `Bearer ${token}`
//            }
//        }
//        const { data } = await usuarioAxios(`/pacientes/editar/${_id}`, config) 
//        setPaciente(data)
  
//         } catch (error) {
//           console.log(error)
//         }
//       }
//       obtenerPacientes()
//   }, [])

//   return (
//     <>
//       <h1 className="font-black text-4xl text-sky-600">Editar Paciente</h1>
//       <p className="mt-3">
//         Utiliza este formulario para editar datos de un paciente
//       </p>

//       {paciente?.nombre ? (
//         <FormularioPaciente 
//         paciente={paciente}
//         cargando={cargando} 
//         />
//       ): <p className="mt-2">ID del paciente no valido</p> }
//     </>
//   );
// };

// export default EditarPaciente;


import { useEffect} from "react"
import usePacientes from "../hooks/usePacientes"
import { useParams } from 'react-router-dom'
import Spinner from "../componentes/Spinner"
import FormularioPaciente from "../componentes/FormularioPaciente"

const EditarPaciente = () => {
  const params = useParams();
  const{ obtenerPaciente, paciente, cargando } = usePacientes()

  useEffect(() => {
    obtenerPaciente(params.id)
  }, []);

  const { nombre } = paciente

  if (cargando) return <Spinner/>

  return (
    <>
      <h1 className="font-black text-4xl text-sky-600">Editar Paciente: {nombre}</h1>
        <p className="mt-3">
          Utiliza este formulario para editar datos de un paciente
        </p>

        <FormularioPaciente/>
    
    </>
  )
}

export default EditarPaciente
