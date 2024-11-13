// componentes
import NavItem from "./NavItem"
import StyledNav from "./styles"

const Nav = () => {
    return (
        <StyledNav>
            <ul>
                <NavItem to="/">
                    Início
                </NavItem>
                <NavItem to="/a">
                    Sobre
                </NavItem>
                <NavItem to="/b">
                    Nossos serviços
                </NavItem>
                <NavItem to="/c">
                    Apresentações
                </NavItem>
            </ul>
        </StyledNav>
    )
}

export default Nav