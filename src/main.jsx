import { createRoot } from 'react-dom/client'
import './index.css'
import Play from './Pages/Play.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home.jsx'
import Dashboard from './Pages/Dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path='/play' element={<Play />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
