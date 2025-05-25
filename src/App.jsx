import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home/Home'
import RoomPage from './pages/Room/Room'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/room/:roomId" element={<RoomPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App
