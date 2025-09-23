import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)


const App = () => {
    return (
        <main>
            <h1 className='text-3xl text-pink-600 flex-center'>demo</h1>
        </main>
    )
}

export default App