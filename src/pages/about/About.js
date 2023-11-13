import React from 'react'
import './about.css'
import { AHeader } from '../../components/AHeader'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

export const About = () => {
    return (
        <div>
            <AHeader title='About Us' image={HeaderImage}>
                <p>nffwrg tnjtjjhgw r4ng i3t4 gvk wnfm5 vb54ti4jr ij67 itgj ti bfbffv nhrgfvnhd4 nfvrrtjt</p>
            </AHeader>
            <section className='about-story'>
                <div className='container about-story-container'>
                    <div className='about-section-image'>
                        <img src={StoryImage} alt='story' />
                    </div>
                    <div className='about-section-content'>
                        <h1>Our Story</h1>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc 4j56u4u4hkbht   gjwyu chbfh3jfob3rfifj dejrffbn ejfdjrf sx,jkxo33gjnoncvb4fo e2jdfjfgnbf3ngfv jn ci.</p>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc 4j56u4u4hkbht   gjwyu chbfh3jfob3rfifj dejrffbn ejfdjrf sx,jkxo33gjnoncvb4fo e2jdfjfgnbf3ngfv jn ci.</p>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc e2jdfjfgnbf3ngfv jn ci.</p>
                    </div>
                </div>
            </section>
            <section className='about-vision'>
                <div className='container about-vision-container'>                    
                    <div className='about-section-content'>
                        <h1>Our Vision</h1>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc 4j56u4u4hkbht   gjwyu chbfh3jfob3rfifj dejrffbn ejfdjrf sx,jkxo33gjnoncvb4fo e2jdfjfgnbf3ngfv jn ci.</p>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc 4j56u4u4hkbht   gjwyu chbfh3jfob3rfifj dejrffbn ejfdjrf sx,jkxo33gjnoncvb4fo e2jdfjfgnbf3ngfv jn ci.</p>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc e2jdfjfgnbf3ngfv jn ci.</p>
                    </div>
                    <div className='about-section-image'>
                        <img src={VisionImage} alt='vision' />
                    </div>
                </div>
            </section>
            <section className='about-mission'>
                <div className='container about-mission-container'>
                    <div className='about-section-image'>
                        <img src={MissionImage} alt='mission' />
                    </div>
                    <div className='about-section-content'>
                        <h1>Our Mission</h1>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc 4j56u4u4hkbht   gjwyu chbfh3jfob3rfifj dejrffbn ejfdjrf sx,jkxo33gjnoncvb4fo e2jdfjfgnbf3ngfv jn ci.</p>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc 4j56u4u4hkbht   gjwyu chbfh3jfob3rfifj dejrffbn ejfdjrf sx,jkxo33gjnoncvb4fo e2jdfjfgnbf3ngfv jn ci.</p>
                        <p>fefj g 4v mn 4uythh4t3gf rbuh ht tu t uughjhgj4fh uuewvbgu4it3ib uy4ujgk4ftn 5 96uy34gvjgh3ir3i 5yi jtg35jgrjbyij6uhg3utc e2jdfjfgnbf3ngfv jn ci.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
