// funções
import styled from 'styled-components'

// imagens
import image from '@/assets/home-background.png'

const BackgroundImage = styled.div`
    position: relative;

    &:before {
        position: absolute;
        display: block;
        content: ' ';
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: url(${image}) no-repeat 50% 0;
        background-size: cover;
        opacity: 0.1;
    }

    .content {
        position: relative;
    }
`

export default BackgroundImage
