// componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// páginas
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
