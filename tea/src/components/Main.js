import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.main`
    /* width: 100vw;
    height: 100vh;
    background-color: wheat; */
    display: flex;
    justify-content: center;
    > a {
        text-decoration: none;
        color: inherit;
    }
`
const Avata = styled.div`
    width: 300px;
    height: 300px;
    background-color: blue;
    margin: 10px;
    color: white;
    text-align: center;
`

const TestDiv = styled.div`
    width: 300px;
    height: 300px;
    background-color: black;
    margin: 10px;
    color: white;
    text-align: center;
`
const GoMyPageDiv = styled.div`
    width: 200px;
    height: 200px;
    background-color: red;
    margin: 10px;
    color: white;
    text-align: center;
`

const Main = () => {
    return (
        <MainContainer>
            <Avata>아바타</Avata>
            <Link to="/test"><TestDiv>Test</TestDiv></Link>
            <Link to="/mypage"><GoMyPageDiv>MyPage</GoMyPageDiv></Link>
        </MainContainer>
    );
};

export default Main;