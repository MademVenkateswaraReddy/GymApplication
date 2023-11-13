import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import {links} from '../data'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import './navbar.css'


export const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)
    return (
        <div className='navbar'>
            <nav className='container nav-container'>
                <Link to='/' className='logo' onClick={()=> isNavShowing(false)}>
                    <img src={logo} alt='logo-pic' />
                </Link>
                <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                    {
                        links.map(({name, path}, index)=>{
                            return (
                                <li key={index}>
                                    <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : ''} onClick={()=>setIsNavShowing(prev => !prev)}>{name}</NavLink>
                                </li>
                            )
                        })
                    }                   
                </ul>
                <button className='nav-toggle-btn' onClick={()=>setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <AiOutlineClose /> : <FaBars />
                    }
                </button>
            </nav>
        </div>
    )
}
