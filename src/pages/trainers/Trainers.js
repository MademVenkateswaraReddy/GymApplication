import React from 'react';
import { AHeader } from '../../components/AHeader';
import HeaderImage from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import { BiLogoInstagram } from 'react-icons/bi'; // Correct import
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './trainer.css';
import { Trainer } from '../../components/Trainer';

export const Trainers = () => {
    return (
        <div>
            <AHeader title='Our Trainers' image={HeaderImage}>
                frgi vhn vnuhfvnv ejhcv ehcev c jhce v cjnc enc  v cc vndfj dnf  fjidjv c dfv fjnvq hfvn.
            </AHeader>
            <section className='trainers'>
                <div className='container trainers-container'>
                    {trainers.map(({ id, image, name, job, socials }) => {
                       return <Trainer key={id} image={image} name={name} job={job} socials={
                            [
                                { icon: <BiLogoInstagram />, link: socials[0] },
                                { icon: <AiOutlineTwitter />, link: socials[1] },
                                { icon: <FaFacebookF />, link: socials[2] },
                                { icon: <FaLinkedinIn />, link: socials[3] }
                            ]}>
                        </Trainer>
})}
                </div>
            </section>
        </div>
    );
};
