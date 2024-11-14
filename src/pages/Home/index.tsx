// componentes
import Header from '@/patterns/Header'
import BackgroundImage from './styles'
import Banner from '@/patterns/Banner'

const Home = () => {
    return (
            <BackgroundImage>
                <div className='content'>
                    <Header />
                    <Banner />
                </div>
            </BackgroundImage>
    )
}

export default Home
