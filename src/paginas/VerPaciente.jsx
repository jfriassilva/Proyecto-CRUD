import {useEffect, useState} from 'react'
import {useParams } from 'react-router-dom'
import Spinner from '../componentes/Spinner'

const VerPaciente = () => {

    const [paciente, setPaciente] = useState({})
    const [cargando, setCargando] = useState (true)

    const { id } = useParams()

    useEffect(() => {
        const obtenerPacientesAPI = async ()  => {
            try {
                const url = `${import.meta.env.VITE_SOME_KEY}/${id}`
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
    cargando ? <Spinner/> : Object.keys(paciente).length === 0 ? <p> No Hay Resultados</p> : (

    <div>
        <>
         <h1 className="font-black text-4xl text-blue-900"> Ver Paciente: {paciente.nombre} </h1>
            <p className="mt-3">Detalles del Paciente</p>

        <p className="text-3xl text-grey-600 mt-10">
            <span className="text-grey-800 uppercase font-bold">Paciente : </span>
                {paciente.nombre} </p>
        <p className="text-xl text-grey-600 mt-4">
            <span className="text-grey-800 uppercase font-bold">Email : </span>
                {paciente.email} </p>
        <p className="text-xl text-grey-600 mt-4">
            <span className="text-grey-800 uppercase font-bold">Telefono : </span>
                {paciente.telefono} </p>
        <p className="text-xl text-grey-600 mt-4">
            <span className="text-grey-800 uppercase font-bold">Edad : </span>
                {paciente.edad} </p>
        <p className="text-xl text-grey-600 mt-4">
            <span className="text-grey-800 uppercase font-bold">Peso : </span>
                {paciente.peso} </p>
        {paciente.notas && ( 
            <p className="text-xl text-grey-600 mt-4">
            <span className="text-grey-800 uppercase font-bold">Notas : </span>
             {paciente.notas} </p>
            )}
        </>
    </div>
    )
  )
}

export default VerPaciente