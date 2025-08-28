import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './Hero.jsx'
import Navbar from './Navbar.jsx'
import Highlights from './Highlights.jsx'
import FeaturedProjects from './FeaturedProjects.jsx'
import CTA from './Cta.jsx'
import ProjectsPage from './ProjectPage.jsx'
import AboutUs from './AboutUs.jsx'
import AdminPanel from './AdminPanel.jsx'
import EnquiryForm from './EnquiryForm.jsx'
// import AdminDashboard from './AdminDashboard.jsx'
// import ProjectDetails from './ProjectDetailes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero />
    <Highlights />
    <FeaturedProjects />
    <CTA />
    <ProjectsPage />
    {/* <ProjectDetails/> */}
    <AboutUs />
    <AdminPanel />
    <EnquiryForm />
    {/* <AdminDashboard/> */}
    <App />
  </StrictMode>,
)
