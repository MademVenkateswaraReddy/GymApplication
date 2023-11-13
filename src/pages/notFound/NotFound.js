import React from 'react'
import { Link } from 'react-router-dom'
import './notFound.css'

export const NotFound = () => {
    return (
        <div>
           <section>
            <div className='container notFound-container'>
                <h2>Page Not Found</h2>
                <Link to='/' className='btn'>Go Back Home</Link>
            </div>
           </section>
        </div>
    )
}
