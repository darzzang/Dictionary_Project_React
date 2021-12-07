import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Word, Input } from 'components'
import logo from '../assets/images/logo.png';
import './Search.css';

const Search = () => {
  const [words, setWords] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    fetch('https://koreandic-search.herokuapp.com/api/words')
      .then(res => res.json())
      .then(result => {
        const { words } = result
        console.log(words)
        setWords(words)
      })
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    setQuery(value)
  }

  // const enableSubmitBtn = () => {
  //   // submitBtn.disabled = state
  // }

  const searchUI = words
    .filter(word => { // 검색 필터
      const r_word = word.r_word.toLowerCase()
      // const r_des = word.r_des.toLowerCase()
      const q = query.toLowerCase()

      return r_word.includes(q)
    })
    .map(word =>
      <Link key={word.id}
        to='/detail'
        state={{ word }}
      >
        <Word
          r_seq={word.r_seq}
          r_word={word.r_word}
          r_link={word.r_link}
          r_chi={word.r_chi}
          r_pos={word.r_pos} />
      </Link>
    )

  return (
    <div className='search-container'>
      <div className='title'>
        <img src={logo} />
      </div>
      <div className='search-box'>
        <Input name="search" type="text" value="" placeholder="단어를 검색하세요"
          value={query} onChange={handleChange} />
      </div>
      <div className='wrap-container'>
        <div className='count'>
          검색 결과 : {query ? searchUI.length : "0"} 개</div>
        <div className='result-container'>
          {query ? searchUI : ""}
        </div>
      </div>
    </div>
  )
}

export default Search