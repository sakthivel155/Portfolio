import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Contact from './pages/Contact'

import Header from './components/Header'
import MobileNavbar from './components/MobileNavbar';

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter future={{ 
        v7_startTransition: true,  // From previous warning
        v7_relativeSplatPath: true // Add this for the new warning
      }}>
         
         <MobileNavbar />
         
          
         <div className='w-[92%] desktop:h-[100vh] mx-auto py-4  desktop:flex desktop:gap-5 desktop:w-[80%]'>
          <Header/>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
         </div>
      </BrowserRouter>
    </>
  )
}

export default App