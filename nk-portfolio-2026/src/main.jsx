import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './header'
import Introduction from './introduction'
import Skills from './skills'
import Education from './education'
import Scroll from './untitles'
import Project from './project'
import Contact from './contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>   
    <h1 className='text-center text-white text-8xl mb-100'>PortFolio Website</h1>
    <Scroll><Introduction></Introduction></Scroll>
    <Scroll><Skills></Skills></Scroll>
    <Scroll><Education></Education></Scroll>
    <Scroll><Project></Project></Scroll>
    <Contact></Contact> 
  </StrictMode>,
)
