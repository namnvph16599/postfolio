import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router';
import PortfolioLayout from './pages/layouts/PortfolioLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import Home from './pages/Home';
import { getInfo } from './api/info';
import { getSkill } from './api/skill';
import { getResume } from './api/resume';
import PrivateRoute from './components/PrivateRoute';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import { getAllProjects } from './api/project';

function App() {
  const [info, setInfo] = useState()
  const [infoSkill, setInfoSkill] = useState([]);
  const [infoResume, setInfoResume] = useState([]);
  const [infoProject, setInfoProject] = useState([]);



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
    const getInfoProject = async () => {
      const { data } = await getAllProjects();
      // console.log("Resume", data);
      setInfoProject(data);
    }
    getInfoProject();
  }, [])
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout info={info} />}>
          <Route index element={<Home info={info} skill={infoSkill} resume={infoResume} infoProject={infoProject}/>} />
          <Route path="/signin" element={<Signin />} />
        </Route>
        <Route path="/admin" element={<PrivateRoute><AdminLayout info={info}/></PrivateRoute>}>
          <Route index element={<Dashboard />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App


