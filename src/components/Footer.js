import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='container footer-container'>
                <article>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='footer' />
                    </Link>
                    <p>
                        bgbhgihfo 4wjhgohvrghfhfhfg hjdff3hjfb gkjg ijgjgjg jgjrgh439ufjv nghhg fhgffg jgigt4g j3ofkgj bkdf2jfu 4tyj3jfj tt4j 3o4f vhih fo3 jdfhf2yo e2kfhtq3 pjfour3k rpftu4 3gw hfuio uf 3 nh  ti3 2fkjlg u9f4tt 9t ut</p>
                    <div className='footer-socials'>
                        <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                        <a href='https://facebook.com/' target='_blank' rel='noreferrer noopener'><FaFacebookF/></a>
                        <a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                        <a href='https://instagram.com/' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Events</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>FAQs</Link>
                </article>
                <article>
                    <h4>Get in Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>
                </article>
                <div className='footer-copyright'>
                    <small>2023 Egaton Tutorials &copy; All rights reserved</small>
                </div>
            </div>
        </div>
    )
}
