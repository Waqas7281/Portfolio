import './App.css'

import NavBar from './Components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Page from './Pages/Page'

function App() {
  

  return (
    <main  id='home'>
     <div className="font-mono bg-black  w-[100%] h-[100%] px-10 py-8">
        <NavBar/>
      <Routes>
        <Route name="Home" path="/home" element={<Home/>} />
        <Route name="*" path="*" element={<Page/>} />    
      </Routes>   
     </div>
      <Footer/>
     </main>
  )
}

export default App
