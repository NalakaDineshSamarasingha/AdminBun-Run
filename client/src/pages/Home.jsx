import React from 'react'
import BunDetails from '../components/BunDetails/BunDetails'
import AddBun from '../components/AddBun/AddBun'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'

function Home() {
    return (
      <div>
        <Navbar/>   
        <div className='com'>
            <BunDetails />
            <AddBun/>
        </div>
      </div>
  )
}

export default Home