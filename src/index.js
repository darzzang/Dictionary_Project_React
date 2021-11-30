import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom" // 라우터 기능 추가
import { Initial, Search } from "pages" // 페이지 컴포넌트 임포트

import './index.css'

const App = () => {
  return (
    <div>
        <Routes>
            <Route path='/Search' element={<Search/>}/>
            <Route path='/' element={<Initial/>}/>
        </Routes>
    </div>
  );
};
  
ReactDOM.render(<BrowserRouter>
                  <App />
                </BrowserRouter>, 
                document.getElementById("app"));