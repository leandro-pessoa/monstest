// patterns
import Nav from '../Nav'

// componentes
import StyledHeader from './styles'
import Button from '@/components/Button'
import { Link } from 'react-router-dom'

// imagens
import logo from '@/assets/logo.png'

const Header = () => {
    return <StyledHeader>
        <Link to={'/'}><img src={logo}/></Link>
        <Nav />
        <Button>Contato</Button>
    </StyledHeader>
}

export default Header
