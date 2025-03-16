import BestSeller from '../components/BestSeller'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import OurPolicy from '../components/OurPolicy'
import { ShopContext } from '../context/ShopContext'

const Home = () => {

    return (
        <>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
        </>
    )
}

export default Home