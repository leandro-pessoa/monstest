// funções
import styled from 'styled-components'

// componentes
import { NavLink } from 'react-router-dom'

// variáveis
import { stylesVariables } from '@/stylesVariables'

const StyledLi = styled.li`
    text-decoration: none;
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${stylesVariables.colors.blue};

    &:hover {
        color: ${stylesVariables.colors.white};
        transition: ease .5s;
    }
    
    &.active {
        color: ${stylesVariables.colors.white};
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.laptop}) {
        font-size: ${stylesVariables.fonts.size.default};
    }
`

export { StyledLi, StyledNavLink }
