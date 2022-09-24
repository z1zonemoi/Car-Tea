import React from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
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
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > img {
            width: 200px;
            height: 200px;
            padding: 5px;
        }
        > button {
            width: 150px;
        }
    }
`

const Test = () => {
    return (
        <TestContainer>
        <article className='question'>
            <ProgressBar className='mt-2' now={60} />
        </article>
            <h2 id="testTitle">낮과 밤 중에 어떤 시간이 더 좋은지 골라주세요</h2>
        <TestChoice>
            <div>
                <img src="../day.jpg"/>
                <Button variant="secondary">낮</Button>{' '}
            </div>
            <div>
                <img src="../night.jpg"/>
                <Button variant="secondary">밤</Button>{' '}
            </div>
        </TestChoice>
        </TestContainer>
    );
};

export default Test;