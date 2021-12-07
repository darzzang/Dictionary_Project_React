import React from 'react'
import './Word.css'

const Word = ({ r_seq, r_word, r_link, r_chi, r_des, r_pos }) => {
    return (
        <div className='item'>
            <div>
                <a href={r_link} target='_blank' rel='noreferrer'>
                    {r_word}
                    <sup>{r_seq ? r_seq : ''}</sup>
                </a>
                {r_chi} {r_pos}
            </div>
            <p>
                {r_des}
                <a href={r_link} className='btn_allmost'>자세히 보기</a>
            </p>
        </div>
    )
}

export default Word;