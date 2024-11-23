// componentes
import { ReactElement } from 'react'
import StyledBackground from './styles'

// tipagem dos props
interface BackgroundImageProps {
    children: ReactElement | string | [ReactElement | string][]
}

const BackgroundImage = ({ children }: BackgroundImageProps) => {
    return (
        <StyledBackground>
            {children}
        </StyledBackground>
    )
}

export default BackgroundImage
