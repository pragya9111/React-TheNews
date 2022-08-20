import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../Newscontainer/News.css'
import Topnews from '../Topnews/Topnews'
import Business from '../Business/Business'
import Entertainment from '../Entertainment/Entertainment'
import Health from '../Health/Health'
import Technology from '../Technology/Tech'
import Science from '../Science/Science'
import Sports from '../Sports/Sports'

function News() {
  const [first, setfirst] = useState([])

    useEffect(() => {
      fetch( "https://newsapi.org/v2/everything?q=world&apiKey=fea5587a2bc24f31b14228e9c7b8c4a9"
      ).then(res=>res.json())
      .then(response=>{
          setfirst(response.articles)
      })

  }, [])

  const holder=first.map((elem,id)=>{
      if(elem.content!==null){
          return <div className="topnews" key={id}>
          <p><b>Headline:</b> {elem.title}</p>
      </div>
      }    
  })

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Topnews />}></Route>
        <Route path='/business' element={<Business />}></Route>
        <Route path='/entertainment' element={<Entertainment />}></Route>
        <Route path='/health' element={<Health />}></Route>
        <Route path='/technology' element={<Technology />}></Route>
        <Route path='/science' element={<Science />}></Route>
        <Route path='/sports' element={<Sports />}></Route>

      </Routes>

      <div className="right1">
        <div className="heading">
          <h3>Top Headlines Throughout The World</h3>
        </div>
        <div className='holdnews' >
          {holder}
        </div>
      </div>
    </div>
  )
}
export default News
