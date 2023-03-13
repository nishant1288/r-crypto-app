import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../index';
import './singlecoin.css'
const SingleCoin = () => {

  const params = useParams();

  const [coins, setCoins] = useState({})

  useEffect(() => {
    const fetchCoin = async () => {
      const { data } = await axios.get(`${server}/coins/${params.id}`)

      setCoins(data);
      console.log(data.image.large)
    }

    fetchCoin();
  }, [params.id])


  return (
    <div className='coinDiv'>
      {/* <img src={coins.image.large} alt='coin' /> */}
      <h3>{coins.name}</h3>
      <h3>{coins.symbol}</h3>
      <p>Working on it</p>
      {/* <h3>{coins.market_data.current_price}</h3> */}
    </div>
  )
}

export default SingleCoin