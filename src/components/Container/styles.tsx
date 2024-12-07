// funções
import styled from 'styled-components'
import { flex } from '@/utils/flex'

// variáveis
import { stylesVariables } from '@/stylesVariables'

const StyledDiv = styled.div`
    ${flex('row', 'center', 'center')}
    height: calc(100vh - ${stylesVariables.headerHeight}px);
    text-align: center;
    padding: 0 2rem;

    @media screen and (min-width: ${stylesVariables.breakpoints.tablet}) {
        justify-content: flex-start;
        text-align: start;
    }
`

export default StyledDiv
