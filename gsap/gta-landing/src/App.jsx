import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Header from './sections/Header'
import Hero from './sections/Hero'
import FirstVideo from './sections/FirstVideo'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
    return (
        <main>
            <Header />
            <Hero />
            <FirstVideo />
        </main>
    )
}

export default App