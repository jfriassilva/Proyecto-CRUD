import { Link } from 'react-router-dom'
import usePacientes from '../hooks/usePacientes'
import Busqueda from './busqueda'

const Header = () => {

  const { handleBuscador } = usePacientes()
  
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
          <h2 className="text-4xl text-sky-600 font-black text-center mb-5 md:mb-0 ">
            CRM Pacientes
          </h2>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <button 
            type="button"
            className="font-bold uppercase"
            onClick={handleBuscador}
          > Buscar Paciente
          </button>
          <Link
            to="/pacientes" 
            className="font-bold uppercase"
            >Pacientes</Link>

          <button type="button" className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
            >Cerrar Sesión</button>

            <Busqueda/>

        </div>
      </div>
    </header>
  )
}

export default Header