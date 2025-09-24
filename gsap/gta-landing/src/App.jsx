import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Header from './sections/Header'
import Hero from './sections/Hero'
import FirstVideo from './sections/FirstVideo'
import Jason from './sections/Jason'
import SecondVideo from './sections/SecondVideo'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
    return (
        <main>
            <Header />
            <Hero />
            <FirstVideo />
            <Jason />
            <SecondVideo />
        </main>
    )
}

export default App