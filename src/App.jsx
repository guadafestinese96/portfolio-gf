import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './Components/Inicio/Inicio'
import CvPdf from './Components/CvPdf/CvPdf'
import Proyectos from './Components/Proyectos/Proyectos'
import Skills from './Components/Skills/Skills'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/cv' element={<CvPdf/>}/>
      <Route path='/proyectos' element={<Proyectos/>}/>
      <Route path='/skills' element={<Skills/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
