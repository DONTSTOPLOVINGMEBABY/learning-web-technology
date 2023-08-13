import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import { useContext, useEffect } from 'react'

const WholePage = styled.div`
    height : 100vh ; 
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Header = styled.div`
    height: 56px;
    width: 100%;
    background-color: ${props => props.theme ? props.theme.dark : 'grey'};
`

const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 ; 
`

// const Footer = styled.div`
//     height: 56px;
//     width: 100%;
//     background-color: ${props => };
// `


function WholeThang () {




    return (
        <WholePage>
            <Header/>
        </WholePage>
    )

}

export default WholeThang