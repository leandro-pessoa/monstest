// funções
import { useAppDispatch, useAppSelector } from '@/features/hooks'

// componentes
import NavItem from './NavItem'
import StyledNav from './styles'

// states globais
import { selectNavDisplay } from '@/features/reducers/app'

// variáveis
import { stylesVariables } from '@/stylesVariables'

// actions
import { closeNav } from '@/features/reducers/app'

const Nav = () => {
    const dispatch = useAppDispatch()
    const navDisplay = useAppSelector(selectNavDisplay)

    // essa função fechará o nav lateral quando a tela do dispositivo chegar a 768px
    window.addEventListener('resize', () => {
        if (
            window.innerWidth >=
            Number(stylesVariables.breakpoints.tablet.slice(0, 3))
        ) {
            dispatch(closeNav())
        }
    })

    return (
        <StyledNav $navDisplay={navDisplay}>
            <ul>
                <NavItem to='/'>Início</NavItem>
                <NavItem to='/a'>Sobre</NavItem>
                <NavItem to='/b'>Nossos serviços</NavItem>
                <NavItem to='/c'>Apresentações</NavItem>
            </ul>
        </StyledNav>
    )
}

export default Nav
