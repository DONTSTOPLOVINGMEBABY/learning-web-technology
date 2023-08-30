import styled from "styled-components"

const AppStyled = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MessageBox = styled.div`
    height: 300px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    font-size: 3rem;
`

const CenterMessage = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
`

export { 
    AppStyled, 
    MessageBox,  
    CenterMessage, 
}