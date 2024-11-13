// funções
import styled from 'styled-components'

// variáveis
import { stylesVariables } from '@/stylesVariables'

const StyledButton = styled.button`
    cursor: pointer;
    border: 1px solid ${stylesVariables.colors.blue};
    background-color: transparent;
    color: ${stylesVariables.colors.white};
    font-family: ${stylesVariables.fonts.primaryFont};
    font-size: 1.2rem;
    border-radius: 48px;
    padding: 4px 40px;

    &:hover {
        background-color: ${stylesVariables.colors.blue};
        transition: ease 0.2s;
        transform: translate(-2px, -2px);
    }

    &:not(:hover) {
        transition: ease .2s;
    }

    &:active {
        transform: translate(2px, 2px);
    }
`

export default StyledButton
