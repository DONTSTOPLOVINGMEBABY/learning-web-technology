import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.section`
    height : 400px ; 
    width : 400px ; 
    display : flex ; 
    justify-content : center ; 
    align-items : center ; 
    background-color : purple ; 
    border-radius : 25px ;  
    flex-direction : column ; 
`


const Button = styled.button`
    color : green ; 
    width : 200px ; 
    height : 200px ; 
    background-color : darkslategrey ; 
    font-size : 30px ; 
    border-radius : 25px ; 
`

const CustomLink = styled.a`
    color : red ; 
`
 
const WrapLink = ({ className, path, children }) => (
    <Link className={className} to={path}>{children}</Link>
)

const StyledLink = styled(WrapLink)`
    margin-top : 12px ; 
    font-size : 2rem ; 
    color : orange ;
`



function Home () {
    return (
        <Wrapper>
            <Button onClick={() => alert('you have pressed the button')}>
                <CustomLink href='https://henryjacobs.us'>Personal site</CustomLink>
            </Button>
            <StyledLink path='/styled-with-props'>Component with Props</StyledLink>
        </Wrapper>
    ) 
}

export default Home