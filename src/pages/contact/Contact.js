import React from 'react'
import './contact.css'
import {AHeader} from '../../components/AHeader'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

export const Contact = () => {
    return (
        <div>
            <AHeader title='Get In Touch' image={HeaderImage}>
                bghgh4fh rtnghghf fj fg9jhfvchbh uhvuhhdbvnke xe3htubj xejjf3vh9f e3hfvj dfhfj v hd3ufnv nrf3f5.
            </AHeader>
            <div className='contact'>
                <div className='container contact-container'>
                    <div className='contact-wrapper'>
                        <a href='mailto:suppoet@egattor.com' target='_blank' rel='noreferrer noopener'><MdEmail /></a>
                        <a href='https://m.me/ernest_achiever' target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
                        <a href='https://wa.me/+233557897546' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
