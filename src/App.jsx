import { useState, useCallback } from 'react';
import './App.css';
import { NavigationContext } from './contexts/NavigationContext';
import Sidebar from './components/Sidebar/Sidebar';
import FullPageScroll from './components/FullPageScroll/FullPageScroll';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const TOTAL_SECTIONS = 6;

function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const navigateTo = useCallback((index) => {
    if (index >= 0 && index < TOTAL_SECTIONS) setCurrentSection(index);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentSection, navigateTo }}>
      <Sidebar />
      <FullPageScroll currentIndex={currentSection} onNavigate={setCurrentSection}>
        <Hero />
        <About />
        <Timeline />
        <Projects />
        <Skills />
        <Contact />
      </FullPageScroll>
    </NavigationContext.Provider>
  );
}

export default App;
