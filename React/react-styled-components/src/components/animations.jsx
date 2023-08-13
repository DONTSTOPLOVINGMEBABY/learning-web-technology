import styled, { keyframes } from 'styled-components'

export const rotate = keyframes`
    from {
        transform: rotate(0deg) ; 
    }
    to {
        transform: rotate(360deg)
    }
`

export const CenterAnything = styled.div`
    width : ${(props) => props.$width ? props.$width : '100vw'};
    height: ${(props) => props.$height ? props.$height : '100vh'};
    display: flex ; 
    justify-content: center;
    align-items: center ; 
`

const Square = styled.div`
    height: 300px ; 
    width: 300px ;
    border-radius: 25px;
    background-color: darkslateblue;
    animation: ${rotate} 2s linear infinite;
    margin-top: 50px;
`

function Animations () {    
    return (
        <CenterAnything $height='500px' $width='500px'>
            <Square/>
        </CenterAnything>
    )
}

export default Animations