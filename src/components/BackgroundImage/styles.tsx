// funções
import styled from 'styled-components'

// imagens
import image from '@/assets/images/home-background.png'

const StyledBackground = styled.div`
    position: relative;
    height: 100vh;
    background: url(${image}) no-repeat 50% 0;
    background-size: cover;

    .content {
        position: relative;
        height: 100%;
    }
`

export default StyledBackground
