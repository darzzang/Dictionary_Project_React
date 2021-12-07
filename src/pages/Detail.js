import React from "react"
import { Word } from 'components'
import { useLocation } from "react-router-dom"

const Detail = () => {
    const location = useLocation()
    const { word } = location.state
    return (
        <div>
            <Word r_seq={word.r_seq}
                r_word={word.r_word}
                r_chi={word.r_chi}
                r_pos={word.r_pos} />
            <p> r_des={word.r_des}</p>
        </div>
    )
}

export default Detail