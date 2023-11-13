import React from 'react'
import { FaCrown } from 'react-icons/fa6'
import { SectionHead } from './SectionHead'
import { Card } from '../UI/Card'
import { Link } from 'react-router-dom'
import { programs } from '../data'
import { AiFillCaretRight } from 'react-icons/ai'

export const Programs = () => {
    return (
        <div>
            <section className='programs'>
                <div className='container programs-container'>
                    <SectionHead icon={<FaCrown />} title='Programs' />
                    <div className='programs-wrapper'>
                        {
                            programs.map(({ id, icon, title, info, path }) => {
                                return (
                                    <Card className='programs-program' key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{info}</small>
                                        <Link className='btn sm' to={path}>Learn More <AiFillCaretRight /></Link>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}
