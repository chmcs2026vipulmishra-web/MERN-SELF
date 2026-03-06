import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import FootDetailPage from './pages/FootDetailPage.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='/footwear/:id' element={<FootDetailPage />} />
      </Routes>
    </div>
  )
}

export default App