import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router';
import PortfolioLayout from './pages/layouts/PortfolioLayout';
import AdminLayout from './pages/layouts/AdminLayout';

import Home from './pages/Home';
import { getInfo, putInfo } from './api/info';
import { getSkill } from './api/skill';
import { getResume } from './api/resume';
import PrivateRoute from './components/PrivateRoute';
import Signin from './pages/Signin';
import Dashboard from './pages/admin/Dashboard';
import { getAllProjects } from './api/project';
import AdminInfo from './pages/admin/Info/AdminInfo';
import AdminResume from './pages/admin/AdminResume';
import AdminSkill from './pages/admin/AdminSkill';
import AdminProject from './pages/admin/AdminProject';
import AdminContact from './pages/admin/contact/AdminContact';
import InfoEdit from './pages/admin/Info/InfoEdit';

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

  const handleEditInfoApp = async (dataEditInfo) => {
    const { data } = await putInfo(dataEditInfo)
    // console.log("infoEditapp,", data);
    setInfo(data)
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<PortfolioLayout info={info} />}>
          <Route index element={<Home info={info} skill={infoSkill} resume={infoResume} infoProject={infoProject} />} />
          <Route path="/signin" element={<Signin />} />
        </Route>
        <Route path="/admin" element={<PrivateRoute><AdminLayout info={info} /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="info" element={<AdminInfo info={info} />} />
          <Route path="info/:id/edit" element={<InfoEdit handleEditInfo={handleEditInfoApp} />} />
          <Route path="resume" element={<AdminResume />} />
          <Route path="skill" element={<AdminSkill />} />
          <Route path="project" element={<AdminProject />} />
          <Route path="contact" element={<AdminContact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


