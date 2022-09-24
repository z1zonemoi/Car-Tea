import React from 'react'
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';
import Test from './Pages/Test'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyPage from './Pages/MyPage';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
