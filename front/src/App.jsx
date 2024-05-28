import './App.css'
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPages'
import ListarPages from './pages/ListarPages'
import AnadirPages from './pages/AñadirPages'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/ListarMascotas' element={<ListarPages/>}/>
      <Route path='/AnadirMascotas' element={<AnadirPages/>}/>
  </Routes>
  )
}

export default App
