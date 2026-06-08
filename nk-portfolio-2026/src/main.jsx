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
import video from './assets/background-gif.mp4';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>  
    <video 
                src={video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover -z-10 fixed"
    /> 
    
    <Scroll><Introduction></Introduction></Scroll>
    <Scroll><Skills></Skills></Scroll>
    <Scroll><Education></Education></Scroll>
    <Scroll><Project></Project></Scroll>
    <Contact></Contact> 
  </StrictMode>,
)
