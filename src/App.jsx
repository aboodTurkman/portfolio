
import { Button } from 'bootstrap'
import Header from './components/1 header/header'
import Hero from './components/2 Hero/hero'
import Main from './components/3 main/Main'
import Contact from './components/4 contact/Contact'
import Footer from './components/5 footer/Footer'
import { useEffect, useState } from 'react'
function App() {
  const [show, setshow] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setshow(true)
      }
      else { setshow(false) }
    })
  }, []);

 
  return (
    <div id='up' className='container'>
      <Header />

      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />

      <Contact />
      <div className='divider' />
      <Footer />

      <a href="#up" style={{ opacity: show ? 1 : 0, transition: "1s" }}><button className='scroll2top icon-keyboard_arrow_up'></button>
      </a>
    </div>
  )
}

export default App
