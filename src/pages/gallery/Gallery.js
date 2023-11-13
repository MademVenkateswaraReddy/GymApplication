import React from 'react'
import {AHeader} from '../../components/AHeader'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

export const Gallery = () => {
    const galleryLength = 15;
    const images = []

    for(let i=1; i<= galleryLength; i++){
        images.push(require(`../../images/gallery${i}.jpg`))
    }



    return (
        <div>
            <AHeader title='Our Gallery' image={HeaderImage}>
                jrghgjg3oufjhohf2kvh3r3 v3n9gh3ngvo 539uf4nv 42fu ry9f20j fv3yrfgnh fu9f g35jf4gjn 4j80tf4 bfg.
            </AHeader>
            <section className='gallery'>
                <div className='container gallery-container'>
                {
                    images.map((image, index)=>{
                        return <article key={index}>
                            <img src={image} alt={`Gallry ${index+1}`} />
                        </article>
                    })
                }
                </div>
            </section>
        </div>
    )
}
