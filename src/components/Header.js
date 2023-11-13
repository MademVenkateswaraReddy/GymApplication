import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

export const Header = () => {
    return (
        <div>
            <header className='main-header'>
                <div className='container main-header-container'>
                    <div className='main-header-left'>
                        <h4>#100DaysOfWorkOut</h4>
                        <h1>Join The Legends Of The Fitness World.</h1>
                        <p>vjrhghrotjejgjgfng4jtjjgjcl3mfj4jifgjrjg4owjfojgipkforjhtj4j4ykmhjigk5yjgow4gtifj</p>
                        <Link to='/plans' className='btn lg'>Get Started</Link>
                    </div>
                    <div className='main-header-right'>
                        <div className='main-header-circle'></div>
                        <div className='main-header-image'>
                            <img src={Image} alt='MainImage' />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
