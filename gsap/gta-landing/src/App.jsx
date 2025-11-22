import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Header from './sections/Header'
import Hero from './sections/Hero'
import FirstVideo from './sections/FirstVideo'
import Jason from './sections/Jason'
import SecondVideo from './sections/SecondVideo'
import Lucia from './sections/Lucia'
import PostCard from './sections/PostCard'
import Final from './sections/Final'
import Footer from './sections/Footer'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
    return (
        <main>
            <Header />
            <Hero />
            <FirstVideo />
            <Jason />
            <SecondVideo />
            <Lucia />
            <PostCard />
            <Final />
            <Footer />
        </main>
    )
}

export default App