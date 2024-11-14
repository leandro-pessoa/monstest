// funções
import styled from 'styled-components'
import { flex } from '@/utils/flex'

// variáveis
import { stylesVariables } from '@/stylesVariables'

const StyledSection = styled.section`
    ${flex('row', 'flex-start', 'center')}
    height: calc(100% - 71px) /* altura do header */;
    padding-left: 15%;

    h2 {
        font-size: 3rem;
        max-width: 600px;
        line-height: 150%;

        span {
            color: ${stylesVariables.colors.blue};
        }
    }
`

export default StyledSection
