import React, { useEffect, useState } from 'react'
import ExchangeCard from './ExchangeCard'
import axios from 'axios'
import ScrollTop from './ScrollTop'
import { server } from '../index'
import './exchangecard.css'

const Exchange = () => {

  const [exchange, setExchange] = useState([])

  useEffect(() => {
    const fetchExchange = async () => {
      const { data } = await axios.get(`${server}/exchanges`);

      setExchange(data);
    }
    fetchExchange()
  }, [])

  return (
    <div className='exchangeDiv'>
      {exchange.map((value) => {
        return (
          <ExchangeCard
            key={value.id}
            image={value.image}
            name={value.name}
            rank={value.trust_score_rank}
            url={value.url}
          />
        )

      })}

      <ScrollTop />

    </div>

  )

}


export default Exchange;