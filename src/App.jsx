import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Search from './Components/Search/Search'
import Final from './Components/Final/Final'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/search' element={<Search />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  )
}

export default App
