import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router';
import PortfolioLayout from './pages/layouts/PortfolioLayout';
import Home from './pages/Home';
import { getInfo } from './api/info';
import { getSkill } from './api/skill';
import { getResume } from './api/resume';

function App() {
  const [info, setInfo] = useState()
  const [infoSkill, setInfoSkill] = useState([]);
  const [infoResume, setInfoResume] = useState([]);


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
    const getInfoResume = async () => {
      const { data } = await getResume();
      // console.log("Resume", data);
      setInfoResume(data);
    }
    getInfoResume();
  }, [])
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout info={info} />}>
          <Route index element={<Home info={info} skill={infoSkill} resume={infoResume} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


