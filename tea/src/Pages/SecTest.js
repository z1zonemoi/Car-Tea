import React from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TestContainer = styled.div`
    

`


const TestChoice = styled.article`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        div {
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
            img {
               width: 200px;
               height: 200px;
               padding: 5px;
           }
            button {
               width: 180px;
           }
    }
    }
`
const TestResult = styled.article`

`
const CountInput = styled.input`
`

const SecTest = ({question}) => {
    return (
<TestContainer>
            {console.log(question)}
        <article className='question'>
            <ProgressBar className='mt-2' now={50} />
        </article>
            <div id="testTitle">{question.question[1].title}</div>
        <TestChoice>
            <Link to='/result'>
            <div>
                <img src="../flower.jpg" alt='꽃이미지'/>
                <Button variant="secondary">{question.question[1].A}</Button>{' '}
            </div>
            </Link>
            <div className='blank'></div>
            <Link to='/result'>
            <div>
                <img src="../fruits.jpg" alt='과일이미지'/>
                <Button variant="secondary">{question.question[1].B}</Button>{' '}
            </div>
            </Link>
        </TestChoice>
</TestContainer>
    );
};

export default SecTest;