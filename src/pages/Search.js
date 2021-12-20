import React, { useState, useEffect } from 'react'
import { Word, Input } from 'components'
import logo from '../assets/images/logo.png';
import './Search.css';
import { Button } from '../components';

const Search = () => {
  const [words, setWords] = useState([])
  const [wordList, setWordList] = useState([])
  const [query, setQuery] = useState('')
  const [msg, setMsg] = useState('')

  useEffect(() => {
    fetch('https://koreandic-search.herokuapp.com/api/words')
      .then(res => res.json())
      .then(result => {
        const { words } = result
        console.log(words)
        // setWords(words)
        setWordList(words)
      })
  }, [])

  // 유효성검사
  // 특수문자
  const checkIfStringHasSpecialCharacter = (str) => {
    const special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/
    const num = /\d/
    const eng = /[a-z]/
    return special.test(str) || num.test(str) || eng.test(str);
  }

  // Input
  const handleChange = (e) => {
    console.log('handleChange:', e.target.value)
    // 입력값이 없을떄
    if (e.target.value === '') {
      console.log('keyword is empty !')
      setWords([])
      setQuery('')
      return;
    }
    const { value } = e.target
    setQuery(value)
  }

  // Button
  const handleClicks = () => {
    if (checkIfStringHasSpecialCharacter(query)) {
      setMsg(<h3>올바른 검색어를 입력하세요</h3>)
      return
    }

    if (query) {
      setMsg('')
      const wordsFiltered = wordList.filter(word => {
        const r_word = word.r_word.toLowerCase()
        // const q = query.toLowerCase()
        return r_word.includes(query)
      })
      setWords(wordsFiltered)
    }
  }

  const SearchUI = () => {
    return (
      <>
        {msg ? msg : words.map(word => <Word
          key={word._id}
          r_word={word.r_word}
          r_link={word.r_link}
          r_seq={word.r_seq}
          r_chi={word.r_chi}
          r_pos={word.r_pos}
          r_des={word.r_des}
        />
        )}
      </>
    )
  }

  return (
    <div className='search-container'>
      <div className='title'>
        <img src={logo} />
      </div>
      <div className='search-box'>
        <Input name="search" type="text" value="" placeholder="단어를 검색하세요"
          value={query} onChange={handleChange} />
        <Button handleClick={handleClicks}>버튼</Button>
      </div>

      <div className='wrap-container'>
        <div className='count'>
          검색 결과 : {query ? words.length : "0"} 개</div>
        <div className='result-container'>
          {query ? <SearchUI /> : ""}
        </div>
      </div>
    </div>
  )
}

export default Search