// componentes
import { ReactElement } from 'react'
import StyledBackground from './styles'

// tipagem das props
interface BackgroundEffectProps {
    children: ReactElement | string | [ReactElement | string][]
}

const BackgroundEffect = ({ children }: BackgroundEffectProps) => {
    return (
        <StyledBackground>
            <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div>
            {children}
        </StyledBackground>
    )
}

export default BackgroundEffect
