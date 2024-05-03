import React   from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ScrollToTop from './functions/scrollToTop';
import { DarkModeProvider } from "./context/DarkModeContext";

import './App.css';

import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Screenix from './Components/Projects/Screenix/Screenix';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <DarkModeProvider>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path = "/" element = {<Home/>} />
              <Route path = "about" element = {<About/>} />
              <Route path = "projects">
                <Route index element = {<Projects />} />
                <Route path = "screenix" element = {<Screenix />} />
              </Route>
              <Route path = "contact" element = {<Contact/>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DarkModeProvider>  
    </BrowserRouter>



  );
}

export default App;
