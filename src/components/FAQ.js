import React, {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

export const FAQ = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false)
    return (
        <div>
            <article className='faq' onClick={()=> setIsAnswerShowing(prev => !prev)}>
                <div>
                    <h4>{question}</h4>
                    <button className='faq-icon'>
                        {
                            isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus />
                        }
                    </button>
                </div>
            {isAnswerShowing && <p>{answer}</p>}
            </article>
        </div>
    )
}
