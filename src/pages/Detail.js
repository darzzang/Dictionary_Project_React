import React from "react"
import { Word } from 'components'
import { useLocation } from "react-router-dom"
import './Detail.css'

const Detail = () => {
    const location = useLocation()
    const { word } = location.state
    return (
        <div className='Detail-container'>
            <div className='Detail-contents'>
                <Word r_seq={word.r_seq}
                    r_word={word.r_word}
                    r_chi={word.r_chi}
                    r_pos={word.r_pos} />
            </div>
            <div className='Word-info'>
                <p className='Word-des'>{word.r_des}</p>
            </div>
        </div>
    )
}

export default Detail