import styled from 'styled-components'

const NormalButton = styled.button`
    display: inline-block;
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    display: block;
`

const RedButton = styled(NormalButton)`
    color : 'red' ; 
`

function PolyMorphicProps () {
    return (
        <>
            <NormalButton onClick={() => alert('you hit a button')}>A Normal Button</NormalButton>
            <NormalButton as='a' href='https://opensourcefeaturetoggles.com' target='_blank'>This is styled as a button is really a link</NormalButton>
            <RedButton onClick={ () => alert('you hit another button')}>This is a normal button, just a red one</RedButton>
            <RedButton as='a' href='https://henryjacobs.us' target='_blank'>This is redbutton but is a link</RedButton>
        </>
    )
}

export default PolyMorphicProps