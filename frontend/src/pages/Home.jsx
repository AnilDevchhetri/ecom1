import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import { ShopContext } from '../context/ShopContext'

const Home = () => {

    return (
        <>
            <Hero />
            <LatestCollection />
        </>
    )
}

export default Home