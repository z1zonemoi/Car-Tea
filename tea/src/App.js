import React, { useState } from 'react'
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Test from './Pages/Test'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPage from './Pages/MyPage';
import SecTest from './Pages/SecTest';
import {dummy} from './dummy.js'
import Result from './Pages/Result';

function App() {
  const [question,SetQuestion] = useState(dummy)
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/test' element={<Test question={question}/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/test1' element={<SecTest question={question}/>}/>
        <Route path='/result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
