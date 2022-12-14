import React from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


// function BasicExample() {
//   return <ProgressBar now={60} />;
// }

// export default BasicExample;
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
const CountInput = styled.input`
`

const Test = ({question}) => {
    return (
        <TestContainer>
            {console.log(question)}
        <article className='question'>
            <ProgressBar className='mt-2' now={0} />
        </article>
            <div id="testTitle">{question.question[0].title}</div>
        <TestChoice>
            <Link to='/test1'>
            <div>
                <img src="../day.jpg" alt='낮이미지'/>
                <Button variant="secondary">{question.question[0].A}</Button>{' '}
            </div>
            </Link>
            <div className='blank'></div>
            <Link to='/test1'>
            <div>
                <img src="../night.jpg" alt='밤이미지'/>
                <Button variant="secondary">{question.question[0].B}</Button>{' '}
            </div>
            </Link>
        </TestChoice>
        <CountInput type="hidden" id="DN" value="0"/>
        </TestContainer>
    );
};

export default Test;