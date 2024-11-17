// patterns
import Nav from '../Nav'

// componentes
import StyledHeader from './styles'
import Button from '@/components/Button'
import { Link } from 'react-router-dom'
import NavButton from '../Nav/NavButton'

// imagens
import logo from '@/assets/logo.png'

const Header = () => {
    return <StyledHeader>
        <div className='title-nav'>
            <NavButton />
            <Link to={'/'}><img src={logo}/></Link>
        </div>
        <Nav />
        <Button>Contato</Button>
    </StyledHeader>
}

export default Header
