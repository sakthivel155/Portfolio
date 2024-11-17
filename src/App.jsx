import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About'
import Resume from './pages/Resume'
import Project from './pages/Project'
import Contact from './pages/Contact'

import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter future={{ 
        v7_startTransition: true,  // From previous warning
        v7_relativeSplatPath: true // Add this for the new warning
      }}>
          <Navbar />
        <div className='w-[92%] mx-auto py-4'>
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