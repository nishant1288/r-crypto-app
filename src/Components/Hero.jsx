import React from 'react'
import './hero.css'
import bitcoinimg from '../assets/bitcoinimg.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='text-div'>
            <h1>Stay updated on Crypto prices</h1>
            <p>Keep a watch on your favourite cryptocurrency and make a smart move</p>
        </div>

        <div className='vector-div'>
        <img src={bitcoinimg} alt='bitcoin' />
        </div>
    </div>
  )
}

export default Hero