import React from 'react'
import logo from '../data/n&c_logo.jpeg'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar () {

    return <div className='navBar'>

        <img src={logo} width={60} alt="logo" />
        <h2>NerdFlix</h2>
        <div className="menuItems">
            <h4><Link to='/'>All movies </Link></h4>
            <h4><Link to='/Stories'>Search</Link></h4>
            <h4><Link to='/SortBy'> Filters</Link></h4>
        </div>

    </div>
}