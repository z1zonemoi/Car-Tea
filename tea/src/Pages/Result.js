import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* >div{
        width: 400px;
        height: 100px;
        background-color: gray;
        margin: 10px;
    } */
`
const QuestionContainer = styled.div`
    width: 500px;
    height: 300px;
    background-color: #d9d9d9;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    >div{
        color: black;
        margin: 15px;
        font-weight: 600;
    }
    .imgContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        >img{
            padding: 3px;
            width: 120px;
            height: 150px;
    }
    }
    .information{
        align-self: flex-end;
    }
`
const AnswerContainer = styled.div`
    width: 500px;
    height: 100px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    a {
        text-decoration: none;
        color: white;
        > div{
            margin: 3px;
            padding: 8px;
            background-color: #4b4b4b;
        }
    }
`
const Result = () => {
    return (
        <ResultContainer>
            <QuestionContainer>
                <div>
                    이 차 어떠신가요?
                </div>
                <div className='imgContainer'>
                    <img src='../images/DB1.jpg'/>
                    <img src='../images/DB1.jpg'/>
                    <img src='../images/DB1.jpg'/>
                </div>
                <div className='information'>결과는 마이페이지에서 다시 볼 수 있어요!</div>
            </QuestionContainer>
            <AnswerContainer>
                <Link to='/test'>
                    <div>다시 골라주세요😟</div>
                </Link>
                <Link to='/'>
                    <div>홈페이지로 돌아가기</div>
                </Link>
                <Link to='/mypage'>
                    <div>마이 페이지 가기👾</div>
                </Link>
            </AnswerContainer>
        </ResultContainer>
    );
};

export default Result;