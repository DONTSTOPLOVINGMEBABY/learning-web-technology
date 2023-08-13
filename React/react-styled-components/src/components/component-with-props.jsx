import styled from "styled-components"

const RedOrWhiteButton = styled.button`
    background : ${ props => props.$primary ? 'red' : 'white' } ; 
    border-color : ${props => props.$primary ? 'white' : 'red' } ; 
    font-size : 2rem ; 
    height : 200px ; 
    width : 200px ; 
`

function StyledWithProps () {

    return (
        <>
            <RedOrWhiteButton>Nice rock</RedOrWhiteButton>
            <RedOrWhiteButton $primary>Nicer Rock</RedOrWhiteButton>
        </>
    )
}

export default StyledWithProps