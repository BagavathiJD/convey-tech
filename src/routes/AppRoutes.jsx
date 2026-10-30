import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import HomeTwo from '../pages/HomeTwo'
import About from '../pages/About'
import History from '../pages/History'
import Team from '../pages/Team'
import TeamDetail from '../pages/TeamDetail'
import Services from '../pages/Services'
import ServiceDetails from '../pages/ServiceDetails'
import Contact from '../pages/Contact'
import Portfolio from '../pages/Portfolio'
import Clients from '../pages/Clients'
import Projects from '../pages/Projects'
import Faq from '../pages/Faq'
import BrochureViewer from '../pages/BrochureViewer'

export default function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-2" element={<HomeTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/:slug" element={<TeamDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/products/:slug" element={<ServiceDetails />} />
        <Route path="/brochures/view/:slug" element={<BrochureViewer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </MainLayout>
  )
}
