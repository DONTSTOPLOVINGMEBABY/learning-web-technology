import styled from 'styled-components'

const Input = styled.input.attrs({
    type: 'text'
})`
    color : 'red' ; 
    width : 200px;  
    height : 200px ; 
    font-size : 12px ; 
`

const PasswordInput = styled(Input).attrs({
    type : 'password' 
})``

function Attrs () {

    return (
        <>
            <Input placeholder='default-attrs'/>
            <PasswordInput type='password'/> 
        </>
    )

}

export default Attrs