// funções
import styled from 'styled-components'
import { flex } from '@/utils/flex'

// variávies
import { stylesVariables } from '@/stylesVariables'

// tipagem dos props
interface StyledNavProps {
    readonly $navDisplay: boolean
}

const StyledNav = styled.nav<StyledNavProps>`
    display: ${(props) => (props.$navDisplay ? 'block' : 'none')};
    position: fixed;
    top: ${stylesVariables.headerHeight}px;
    left: 0;
    background-color: ${stylesVariables.colors.blue}14;
    height: 100vh;
    padding: 3rem;
    backdrop-filter: blur(3px);
    font-size: ${(props) =>
        props.$navDisplay
            ? stylesVariables.fonts.size.default
            : stylesVariables.fonts.size.small};

    ul {
        ${flex('column', 'flex-start', 'center', '2rem')}
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.smartphone}) {
        backdrop-filter: blur(0px);
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.tablet}) {
        display: block;
        position: relative;
        background-color: transparent;
        height: auto;
        top: auto;
        left: auto;
        padding: 0;

        ul {
            ${flex('row', 'center', 'center', '2rem')}
        }
    }
`

export default StyledNav
