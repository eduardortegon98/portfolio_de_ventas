import { useState } from 'react'
import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import Stack from './Stack/Stack.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Stack />
    </>
  )
}

export default App
