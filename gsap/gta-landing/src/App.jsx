import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Header from './sections/Header'
import Hero from './sections/Hero'
import FirstVideo from './sections/FirstVideo'
import Jason from './sections/Jason'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
    return (
        <main>
            <Header />
            <Hero />
            <FirstVideo />
            <Jason />
        </main>
    )
}

export default App