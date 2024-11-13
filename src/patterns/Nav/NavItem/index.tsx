// componentes
import { StyledLi, StyledNavLink } from './styles'

// tipagem das props
interface NavItemProps {
    to: string
    children: string
}

const NavItem = ({ to, children }: NavItemProps) => {
    return (
        <StyledLi>
            <StyledNavLink
                to={to}
                className={({ isActive }) => `${isActive ? 'active' : ''}`}
            >
                {children}
            </StyledNavLink>
        </StyledLi>
    )
}

export default NavItem
