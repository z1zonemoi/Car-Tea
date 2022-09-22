import React from 'react';
import {RiCupFill} from 'react-icons/ri'
import styled from 'styled-components'

const HeaderComtainer = styled.header`
    background: url("http://www.nexentire.com/webzine/201806/kr/assets/images/contents/010_04.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`

const Header = styled.div`
    background-color: rgba(1,1,1,0);
    nav{
        padding: 10px;
        color: #ffffff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        font-size: 17px;
    }
`

const Nav = () => {
    return (
        <HeaderComtainer>
            <Header>
            <nav>
                <RiCupFill/> Car 말고 Tea
            </nav>
            </Header>
        </HeaderComtainer>
    );
};

export default Nav;