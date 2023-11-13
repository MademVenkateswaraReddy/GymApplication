import React from 'react'
import {AHeader} from '../../components/AHeader'
import HeaderImage from '../../images/header_bg_4.jpg'
import {Card} from '../../UI/Card'
import {plans} from '../../data'
import './plans.css'

export const Plans = () => {
    return (
        <div>
            <AHeader title='Membership Plans' image={HeaderImage}>
                bcbf ewhf cnhhg wqdfvw cvhhd2gg bwfgn9 xb2nf vhrb fcgr r43rfb h43fvb b vhf vbfhweb vwhfh fvbf  v e fber erebfv yeb fhfbfb ugy.
            </AHeader>
            <section className='plans'>
                <div className='container plans-container'>
                    {
                        plans.map(({id, name, desc, price, features})=>{
                            return <Card className='plans' key={id}>
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h1>{`$${price}`}</h1><h2>/mo.</h2>
                                <h4>Features</h4>
                                {
                                    features.map(({feature, available}, index)=>{
                                        return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                                    })
                                }
                                <button className='btn lg'>Choose Plan</button>
                            </Card>
                        })
                    }
                </div>
            </section>
        </div>
    )
}
