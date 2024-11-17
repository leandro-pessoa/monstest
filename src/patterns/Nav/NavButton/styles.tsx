// funções
import styled from "styled-components";
import { flex } from "@/utils/flex";

// variáveis
import { stylesVariables } from '@/stylesVariables'

const StyledButton = styled.button`
    ${flex('row', 'center', 'center')}
    background-color: transparent;
    border: none;
    border-radius: 50px;
    padding: 3px 4px;
    transition: ease .2s;

    &:active {
        background-color: ${stylesVariables.colors.white}60;
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.tablet}) {
        display: none;
    }
`

export default StyledButton