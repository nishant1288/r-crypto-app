import React from 'react'
import { Link } from 'react-router-dom'
import './coins.css'

const CoinCard = (props) => {
  return (
   
    <div className='coinsDetail'>
      <Link className='linked' to={`/coins/${props.id}`}>
      <img src={props.img} alt='coin' />
      <h3>{props.name}</h3>
      <p>{props.symbol}</p>
      <h4>₹{props.price}</h4>
      </Link>
    </div>
 
  )
}

export default CoinCard