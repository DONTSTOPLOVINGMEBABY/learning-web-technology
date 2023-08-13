import styled from 'styled-components'
import { rotate, CenterAnything } from './animations'

const Thing = styled.div`
    height : 200px ; 
    width: 200px;
    background-color: red;

    &:hover {
        background-color: red;
        animation: ${rotate} 2s linear infinite;
    }


`


function AdvancedSelectors () {
    return ( 
        <CenterAnything $width='600px' $height='600px'>
            <Thing/> 
        </CenterAnything>
    )
}

export default AdvancedSelectors