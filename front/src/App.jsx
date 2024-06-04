import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/LoginPages.jsx'
import ListarMascotas from './pages/ListarPages.jsx'
import AnadirMascotas from './pages/AñadirPages.jsx'
import ConsultarMascotas from './pages/ConsultarPage.jsx'
import EditarMascotas from './pages/EditarPages.jsx'

function App() {

  return (
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/ListarMascotas' element={<ListarMascotas/>}/>
    <Route path='/AnadirMascotas' element={<AnadirMascotas/>}/>
    <Route path='/ConsultarMascotas' element={<ConsultarMascotas/>}/>
    <Route path='/EditarMascotas' element={<EditarMascotas/>}/>
  </Routes>
  )
}

export default App
