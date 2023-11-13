import React from 'react'
import { SectionHead } from './SectionHead'
import { Card } from '../UI/Card'
import { testimonials } from '../data'
import {ImQuotesLeft} from 'react-icons/im'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
import { useState } from 'react'

export const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]

    const prevTestiminialHandler=()=>{
        setIndex(prev => prev -1)

        if(index <= testimonials.length - 1){
            setIndex(0)
        }
    }

    const nextTestiminialHandler=()=>{
        setIndex(prev => prev +1);

        if(index >= testimonials.length - 1){
            setIndex(0)
        }
    }



    return (
        <div>
            <section className='testimonials'>
                <div className='container testimonials-container'>
                    <SectionHead icon={<ImQuotesLeft/>} title='Testimonials' className='testimonials-head' />
                    <Card className='testimonial'>
                        <div className='testimonial-avatar'>
                            <img src={avatar} alt='name' />
                        </div>
                        <p className='testimonial-quote'>{`"${quote}"`}</p>
                        <h5>{name}</h5>
                        <small className='testimonial-title'>{job}</small>
                    </Card>
                    <div className='testimonials-btn-container'>
                        <button className='testimonials-btn' onClick={prevTestiminialHandler}><IoIosArrowDropleftCircle/></button>
                        <button className='testimonials-btn' onClick={nextTestiminialHandler}><IoIosArrowDroprightCircle/></button>
                    </div>
                </div>
            </section>
        </div>
    )
}
