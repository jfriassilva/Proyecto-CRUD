import {useNavigate} from 'react-router-dom'

const Paciente = ({paciente, handleEliminar}) => {

    const navigate = useNavigate()

    const { nombre, email, telefono, edad, peso , notas , id} = paciente

  return (
    <tr className=" border-b hover:bg-gray-50 text-center">
        <td className="p-3"> {nombre}</td>
        <td className="p-3">
            <p><span className="text-grey-800  uppercase font-bold">Email: </span>{email}</p>
            <p><span className="text-grey-800  uppercase font-bold">Tel: </span>{telefono}</p>
        </td>
        <td className="p-3">
            <button
                type="Button"
                className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase fond-bold text-xs"
                onClick={() => navigate(`/pacientes/${id}`)}
            >Ver</button>
            <button
                type="Button"
                className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase fond-bold text-xs mt-3"
                onClick={() => navigate(`/pacientes/editar/${id}`)}
            >Editar</button>
            <button
                type="Button"
                className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase fond-bold text-xs mt-3"
                onClick={() => handleEliminar(id)}
            >Eliminar</button>
        </td>
    </tr>
  )
}

export default Paciente