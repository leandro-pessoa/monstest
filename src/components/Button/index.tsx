// componentes
import { ReactElement } from 'react'
import StyledButton from './styles'

// tipagens das props
interface ButtonProps {
    children: ReactElement | string | (ReactElement | string)[]
}

const Button = ({ children }: ButtonProps) => {
    return <StyledButton>
        {children}
    </StyledButton>
}

export default Button
