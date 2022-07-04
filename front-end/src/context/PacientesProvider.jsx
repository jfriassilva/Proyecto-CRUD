import {useState, useEffect, createContext} from 'react'
import usuarioAxios from '../config/usuarioAxios'

const PacientesContext = createContext();

const PacientesProvider = ({children}) => {



    return (
        <PacientesContext.Provider
            value={{

            }}
            >{children}
        </PacientesContext.Provider>
    )
}
export {
    PacientesProvider
}


export default PacientesContext