// componentes
import Header from '@/patterns/Header'
import BackgroundImage from './styles'

const Home = () => {
    return (
        <BackgroundImage>
            <div className='content'>
                <Header />
            </div>
        </BackgroundImage>
    )
}

export default Home
