import React from 'react'
import father from "../../public/bright-singh.jpg"
import inside from "../../public/inside-church.jpg"
import Footer from './Footer'
function Home() {
  return (
    <div className='home-div'>
        <h2>Our lady of Snow Church</h2>
        <div>
        <img src={inside} alt="image" className='inside-chruch'/>
        </div>
       <div >
        <img src={father} alt="image" className="father-image"/>
       </div>
       <Footer/>
    </div>
  )
}

export default Home