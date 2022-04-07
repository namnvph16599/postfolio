import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router';
import PortfolioLayout from './pages/layouts/PortfolioLayout';
import Home from './pages/Home';
import { getInfo } from './api/info';
import { getSkill } from './api/skill';

function App() {
  const [info, setInfo] = useState()
  const [infoSkill, setInfoSkill] = useState([]);

  // console.log(info);
  useEffect(() => {
    const getInfomation = async () => {
      const { data } = await getInfo();
      const info = data[0];
      // console.log(info);
      setInfo(info)
    }
    getInfomation();
    const getInfoSkill = async () => {
      const { data } = await getSkill();
      setInfoSkill(data);
    }
    getInfoSkill();
  }, [])
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout info={info} />}>
          <Route index element={<Home info={info} skill={infoSkill} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


