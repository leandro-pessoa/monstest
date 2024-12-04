// funções
import styled from 'styled-components'
import { flex } from '@/utils/flex'

const StyledSection = styled.section`
    ${flex('row', 'center', 'center', '2rem')}
    height: 100%;

    .image {

    }

    .content {
        ${flex('column', 'auto', 'auto', '2.5rem')}
        text-indent: 3rem;

        .content__icons {
            ${flex('row', 'center', 'center', '2rem')}
        }
    }
`

export default StyledSection
