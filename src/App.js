import React, {useState,useEffect} from 'react'
import '../src/App.css'
import Navbar from './Component/Navbar/Navbar'
import Newscontainer from './Component/Newscontainer/News'
function App() {
  return (
    <>
    <Navbar/>
    <Newscontainer/>
    </>
  )
}

export default App