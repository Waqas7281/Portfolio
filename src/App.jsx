import './App.css'

import NavBar from './Components/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Page from './Pages/Page'
import Contect from './Pages/Contect'

function App() {
  

  return (
   <div>
     <main className="font-mono bg-black  w-[100%] h-[100%]  px-5 sm:px-10 py-8" id='home'>
       <NavBar/>
       <Home/>  
       <Contect/>
     </main>
     <Footer/>
   </div>
  )
}

export default App
