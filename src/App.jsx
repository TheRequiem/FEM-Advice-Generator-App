import { useState, useEffect } from 'react'
import './App.css'
import DividerDesktop from './assets/pattern-divider-desktop.svg'
import DividerMobile from './assets/pattern-divider-mobile.svg'

function App() {
  const [advice, setAdvice] = useState([])

  const call = () => {
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => setAdvice(data.slip))
}

  useEffect(() => {
    call()
  }, [])

  return (
    <>
    <div className='card'>
     <h1>Advice#{advice.id}</h1>
     <p>"{advice.advice}"</p>
     <picture>
     <source
       media="(max-width: 400px)"
       srcSet={DividerMobile}
       sizes="400px"
     />
     <source
       srcSet={DividerDesktop}
       sizes="1280px"
     />
     <img src="/assets/pattern-divider-desktop" alt='' />
   </picture>
     <button type='button' onClick={call}>Generate Advice</button>
     </div>
     <div className='attribution'>
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://www.frontendmentor.io/profile/TheRequiem">The Requiem</a>.
  </div>
    </>
  )
}

export default App
