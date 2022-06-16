import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'
import NuevoPaciente from './paginas/NuevoPaciente'
import EditarPaciente from './paginas/EditarPaciente'
import VerPaciente from './paginas/VerPaciente'



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/pacientes"  element={<Layout/>}>
          <Route index element={<Inicio />} />
          <Route path="nuevo" element={<NuevoPaciente />} />
          <Route path="editar/:id" element={<EditarPaciente />} />
          <Route path=":id" element={<VerPaciente />} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
