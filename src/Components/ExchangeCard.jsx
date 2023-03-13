import React from 'react'
import './exchangecard.css'

const ExchangeCard = (props) => {
    return (
        <a href={props.url}>
        <div className='exchange-cards'>
                <img src={props.image} alt='crypto'/>
                <p>{props.name}</p>
                <h4>Rank : {props.rank}</h4>
        </div>
        </a>
    )
}

export default ExchangeCard