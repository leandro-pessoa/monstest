// funções
import styled from 'styled-components'
import { flex } from '@/utils/flex'
import { stylesVariables } from '@/stylesVariables'

const StyledSection = styled.section`
    ${flex('column', 'center', 'center', '2rem')}
    height: 100%;

    .image {
        img {
            width: 80%;
        }
    }

    .content {
        ${flex('column', 'auto', 'auto', '2.5rem')}
        text-align: center;
        line-height: 20px;

        .content__icons {
            ${flex('row', 'center', 'center', '3rem')}

            a {
                ${flex('row', 'center')}
                img {
                    width: 22px;
                }
            }
        }
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.smartphone}) {
        .image {
            img {
                width: 70%;
            }
        }

        .content {
            .content__icons {
                a {
                    img {
                        width: 25px;
                    }
                }
            }
        }
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.tablet}) {
        flex-direction: row;

        .image {
            width: 50%;
            img {
                width: 100%;
            }
        }

        .content {
            width: 50%;

            p {
                text-align: left;
                text-indent: 3rem;
            }
        }
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.laptop}) {
        margin: 0 10%;

        .content {
            p {
                font-size: 1rem;
                
            }
        }
    }

    @media screen and (min-width: ${stylesVariables.breakpoints.desktop}) {
        .content {
            p {
                font-size: 1.1rem;
                line-height: 30px;
            }
        }
    }
`

export default StyledSection
