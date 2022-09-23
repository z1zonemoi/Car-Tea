import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
    /* width: 100vw;
    height: 100vh;
    background-color: wheat; */
    display: flex;
    justify-content: center;
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
            <TestDiv>Test</TestDiv>
            <GoMyPageDiv>MyPage</GoMyPageDiv>
        </MainContainer>
    );
};

export default Main;