// componentes
import { ReactElement } from "react"
import StyledDiv from "./styles"

// tipagem das props
interface ContainerProps {
    children: string | ReactElement | [ReactElement | string][]
}

const Container = ({ children }: ContainerProps) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}

export default Container