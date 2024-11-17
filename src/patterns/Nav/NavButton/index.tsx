// funções
import { useAppDispatch } from "@/features/hooks"

// componentes
import StyledButton from "./styles"
import { FiMenu } from 'react-icons/fi'

// variáveis
import { stylesVariables } from "@/stylesVariables"

// actions
import { toggleNavDisplay } from "@/features/reducers/app"

const NavButton = () => {
    const dispatch = useAppDispatch()

    // irá executar a action toggleNavDisplay
    const buttonHandle = () => {
        dispatch(toggleNavDisplay())
    }

    return (
        <StyledButton onClick={buttonHandle}>
            <FiMenu color={stylesVariables.colors.blue} size={stylesVariables.iconSize}/>
        </StyledButton>
    )
}

export default NavButton