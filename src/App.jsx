import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header/header'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
