import React from 'react'
import Index from './my-project'
import About from './my-project/about'
import Skill from './my-project/skill'
import Projects from './my-project/project'
import Contect from './my-project/contect'
import Footer from './my-project/footer'
import useJQueryEffects from './my-project/useffects'
const App: React.FC = () => {
  useJQueryEffects();
  return (
    <>
      <Index />
      <About />
      <Skill />
      <Projects />
      <Contect />
      <Footer />
    </>
  )
}

export default App
