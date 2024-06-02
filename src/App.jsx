import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Info from './contact/pages/Info';
import Sidebar from './sidebar/pages/Sidebar';
import Works from './content/pages/Works';
import Contactme from './content/pages/Contactme';
import Resume from './content/pages/Resume';
import Aboutme from './content/pages/Aboutme';
import Web from './content/pages/WorkPages/Web';
import Repositories from './content/pages/WorkPages/Repositories';
import Design from './content/pages/WorkPages/Design';
import './App.css'

  function App() {
    return (
      <>
        <Info />
        <Router>
          <div className="router-container">
            <Routes>
              <Route path="/Contactme" element={<Contactme />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Work" element={<Web />} />
              <Route path="/" element={<Aboutme />} />
              <Route path="/Work/Web" element={<Web />} />
              <Route path="/Work/Repositories" element={<Repositories />} />
              <Route path="/Work/Design" element={<Design />} />
            </Routes>
          </div>
          <Sidebar />
        </Router>
      </>
    )
}

export default App;
