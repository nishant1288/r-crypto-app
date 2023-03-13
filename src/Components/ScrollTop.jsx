import React from 'react'
import './scroll.css'
import { HashLink } from 'react-router-hash-link'

const ScrollTop = () => {
  return (
    <div className='scrollDiv'>
       <HashLink to={"#navigationBar"}><i class="fa-solid fa-jet-fighter-up"></i></HashLink>
        <p>Scroll Up</p>
    </div>
  )
}

export default ScrollTop