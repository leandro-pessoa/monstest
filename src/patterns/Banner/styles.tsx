// funções
import styled from 'styled-components'
import { flex } from '@/utils/flex'

// variáveis
import { stylesVariables } from '@/stylesVariables'

const StyledSection = styled.section`
    ${flex('row', 'center', 'center')}
    height: calc(100% - ${stylesVariables.headerHeight}px);
    text-align: center;
    padding: 0 3rem;

    h2 {
        font-size: 1.5rem;
        line-height: 150%;

        span {
            color: ${stylesVariables.colors.blue};
        }
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.tablet}) {
        justify-content: flex-start;
        padding-left: 15%;
        text-align: start;

        h2 {
            font-size: 2rem;
            max-width: 600px;
        }
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.laptop}) {
        h2 {
            font-size: 3rem;
        }
    }
`

export default StyledSection
