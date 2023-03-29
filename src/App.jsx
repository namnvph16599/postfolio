


import { Routes, Route } from 'react-router';
import PortfolioLayout from './pages/layouts/PortfolioLayout';

import Home from './pages/Home';
import Signin from './pages/Signin';
import About from './pages/About';
import Resume from './pages/Resume';
import Skill from './pages/Skill';
import Portfolio from './pages/Portfolio';
import SoftSkill from './pages/SoftSkill';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout />}>
          <Route index element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/softSkill" element={<SoftSkill />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Route>
      </Routes>
    </div>
  )
}

export default App


