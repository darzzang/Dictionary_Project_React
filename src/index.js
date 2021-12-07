import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom" // 라우터 기능 추가
import { Initial, Search, Detail } from "pages" // 페이지 컴포넌트 임포트

import './index.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Search />} />
        {/* <Route path='/' element={<Initial/>}/> */}
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </div>
  );
};

ReactDOM.render(<BrowserRouter>
  <App />
</BrowserRouter>,
  document.getElementById("app"));