import React from 'react';
import styled from 'styled-components'
import Logo from '../img/logo.jpg'

const MeuHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 150px;
    width: 100%;
    background-color: black; 
` 

const LogoPrincipal = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 80px;
`
function Header(){
    return(
        <MeuHeader>
            <LogoPrincipal src={Logo}></LogoPrincipal> 
        </MeuHeader>
    )
}

export default Header