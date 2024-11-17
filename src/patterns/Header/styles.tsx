// funções
import styled from 'styled-components'
import { flex } from '@/utils/flex'

// variáveis
import { stylesVariables } from '@/stylesVariables'

const StyledHeader = styled.header`
    ${flex('row', 'space-between', 'center')}
    padding: 0 1rem;
    height: ${stylesVariables.headerHeight}px;

    .title-nav {
        ${flex('row', 'auto', 'flex-end', '1rem')}
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.laptop}) {
        padding: 0 5%;
    }
`

export default StyledHeader
