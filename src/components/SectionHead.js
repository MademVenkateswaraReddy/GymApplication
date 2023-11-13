import React from 'react'

export const SectionHead = ({icon, title, className}) => {
    return (
        <div>
            <div className={`programs-head ${className}`}>
                        <span>{icon}</span>
                        <h2>{title}</h2>
                    </div>
        </div>
    )
}
