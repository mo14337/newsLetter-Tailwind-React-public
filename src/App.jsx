import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Success from './pages/Success'
import Landing from './pages/Landing'
function App() {
  const [count, setCount] = useState(0)

  return (
    
   

    <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/success' element={<Success/>} />
    </Routes>
   
    
   
    
  )
}

export default App
