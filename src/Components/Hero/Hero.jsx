import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
    <div className='hero-text'>
      <h1>Hi how are you guys</h1>
      <p>please share you experiance of this website</p>
      <button className='btn'>Explore more <img src={dark_arrow} alt=''/></button>
    </div>
    </div>
  )
}

export default Hero
