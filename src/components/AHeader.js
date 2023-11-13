import React from 'react'

export const AHeader = ({title, image, children}) => {
    return (
        <div>
            <header className='header'>
                <div className='header-container'>
                    <div className='header-container-bg'>
                        <img src={image} alt='headerbg' />
                    </div>
                    <div className='header-content'>
                        <h2>{title}</h2>
                        <p>{children}</p>
                    </div>
                </div>
            </header>
        </div>
    )
}
