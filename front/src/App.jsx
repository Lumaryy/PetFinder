import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPages'
import ListarPages from './pages/ListarPages'
import AnadirPages from './pages/AñadirPages'
import ConsultaPages from './pages/ConsultarPage'
import EditarPages from './pages/EditarPages'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/ListarMascotas' element={<ListarPages/>}/>
      <Route path='/AnadirMascotas' element={<AnadirPages/>}/>
      <Route path='/consultar' element={<ConsultaPages />} />
        <Route path='/editar' element={<EditarPages />} />
  </Routes>
  )
}

export default App
