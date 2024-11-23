// componentes
import Header from '@/patterns/Header'
import BackgroundImage from '@/components/BackgroundImage'
import Banner from '@/patterns/Banner'
import BackgroundEffect from '@/components/BackgroundEffect'

const Home = () => {
    return (
        <BackgroundEffect>
            <BackgroundImage>
                <div className="content">
                    <Header />
                    <Banner />
                </div>
            </BackgroundImage>
        </BackgroundEffect>
    )
}

export default Home
