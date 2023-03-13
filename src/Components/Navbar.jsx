import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const [bars, setBars] = useState(true);

  const changeBar = () =>
  {
    setBars(!bars);
  }

  return (
    <div id="navigationBar" className='navbar'>
      <h3>Crypton</h3>
      <i onClick={changeBar} className={ bars ? 'fa-solid fa-bars' : 'fa-solid fa-xmark' }></i>
      <ul onClick={changeBar} className={ bars ? 'nav-items active' : 'nav-items' }>
      <li><Link className='link-items' to={"/"}><i class="fa-solid fa-house-user"></i>Home</Link></li>
      <li><Link className='link-items' to={"/exchange"}><i class="fa-solid fa-arrow-right-arrow-left"></i>Exchange</Link></li>
      <li><Link className='link-items' to={"/coins"}><i class="fa-solid fa-coins"></i>Coins</Link></li>
      </ul>
    </div>
  )
}

export default Navbar