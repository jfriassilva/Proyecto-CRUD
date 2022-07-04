import {useState, useEffect, createContext} from 'react'
import usuarioAxios from '../config/usuarioAxios'
import { useNavigate } from 'react-router-dom'


const PacientesContext = createContext();

const PacientesProvider = ({children}) => {

    const [pacientes, setPacientes] = useState([]);
    const [alerta, setAlerta] = useState({});
    const [paciente, setPaciente] = useState({});
    const [cargando, setCargando] = useState(false)

    const navigate = useNavigate();

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

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    const submitPacientes = async pacientes => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await usuarioAxios.post('/pacientes', pacientes, config)
            setPacientes(data)

            setAlerta({
                msg:'Paciente agregado correctamente',
                error: false
            })
            setTimeout(()=> {
                setAlerta({})
                navigate('/pacientes')
            }, 3000)
        } catch (error) {
            console.log(error)
        }
    }

    const obtenerPaciente = async id => {
        setCargando(true)
        try {
            const token = localStorage.getItem('token')
            if(!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

           const { data } = await usuarioAxios(`/pacientes/${id}`, config )
           setPaciente(data)
        } catch (error) {
            console.log(error)
        } finally {
            setCargando(false)
        }
    }


    return (
        <PacientesContext.Provider
            value={{
                pacientes,
                mostrarAlerta,
                alerta,
                submitPacientes,
                obtenerPaciente,
                paciente,
                cargando
            }}
            >{children}
        </PacientesContext.Provider>
    )
}
export {
    PacientesProvider
}


export default PacientesContext