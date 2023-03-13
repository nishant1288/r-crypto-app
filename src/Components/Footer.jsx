import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='upper-footer'>
                <h3>Crypton</h3>
                <p>Crypton is a Web Application where you can keep a watch on your favourite cryptocurrency and make a smart move accordingly.</p>
                <p>Connect with me</p>
                <div className='icons-div'>
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-linkedin"></i>
                </div>
                <div className='nav-links'>
                    <ul>
                        <li><Link className='link-items' to='/'>Home</Link></li>
                        <li><Link className='link-items' to='/exchange'>Exchange</Link></li>
                        <li><Link className='link-items' to='/coins'>Coins</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer