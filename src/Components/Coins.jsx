import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { server } from '../index'
import CoinCard from './CoinCard'
import './coins.css'
import ScrollTop from './ScrollTop'
const Coins = () => {
  const [coin, setCoin] = useState([])
  const [page, setPage] = useState([1])

  const prevPage = () => {
    if (page > 1)
    {
      setPage(page - 1)
    }

    else 
    {
      alert ("Page is on 1")
    }
    
  }

  const nextPage = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    const fetchCoins = async () => {
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=inr&page=${page}`)
      setCoin(data)
    }
    fetchCoins()
  }, [page])

  return (
    <div className='coins'>

      {coin.map((value) => {
        return (
          <CoinCard  key={value.id}
            id={value.id}
            img={value.image}
            name={value.name}
            symbol={value.symbol}
            price={value.current_price}
          />
        )
      })}

      <div className='page-buttons'>
      <button className='prev-btn' onClick={prevPage} >Previous</button> <span>Page Number {page}</span>
      <button className='next-btn' onClick={nextPage} >Next</button>
      </div>
      <ScrollTop />
    </div>
  )
}

export default Coins