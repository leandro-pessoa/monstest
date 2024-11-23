// funções
import styled from 'styled-components'

// componentes
import { NavLink } from 'react-router-dom'

// variáveis
import { stylesVariables } from '@/stylesVariables'

const StyledLi = styled.li`
    text-decoration: none;
    width: 100%;
    background-color: ${stylesVariables.colors.black}b5;
    text-align: center;
    padding: 8px 10px;
    border-radius: 5px;

    @media screen and (min-width: ${stylesVariables.breakpoints.smartphone}) {
        background-color: transparent;
        text-align: auto;
        padding: auto;
        border: auto;
        width: auto;
    }
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${stylesVariables.colors.white};

    &:hover {
        color: ${stylesVariables.colors.blue};
        transition: ease .5s;
    }
    
    &.active {
        color: ${stylesVariables.colors.blue};
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.laptop}) {
        font-size: ${stylesVariables.fonts.size.default};
    }
`

export { StyledLi, StyledNavLink }
