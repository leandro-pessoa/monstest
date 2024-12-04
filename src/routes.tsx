// componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// páginas
import DefaultPage from './pages/DefaultPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='/sobre' element={ <About /> }/>
                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
