// patterns
import Header from "@/patterns/Header"

// componentes
import { Outlet } from "react-router-dom"

// funções
import { useLocation } from "react-router-dom"

const DefaultPage = () => {
    // obtém a url atual do website (ex: '/', '/sobre')
    const { pathname } = useLocation()

    return (
        <>
                {
                    // caso a url for diferente da página inicial, será exibido o header de forma padrão
                    // se a url for da página inicial, o header será exibido de forma diferente para englobar a imagem de fundo
                    pathname !== '/' ? <Header /> : ''
                }
                <Outlet />
        </>
    )
}

export default DefaultPage