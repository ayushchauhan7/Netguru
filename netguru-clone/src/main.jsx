import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import EstimateProjectPage from "./pages/EstimateProjectPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import Services from "./pages/Services.jsx";
import Insights from "./pages/Insights.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ClientsPage from "./pages/ClientsPage.jsx";
import IndustriesPage from "./pages/IndustriesPage.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          {/* This Route uses MainLayout for all nested routes */}
          <Route index element={<HomePage />} />

              {/* The index route is your homepage */}

              {/* The estimate page route */}
              <Route path="estimate-project" element={<EstimateProjectPage />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Insights />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="industries" element={<IndustriesPage />} />




              {/* Any other new pages can be added here and will also get the footer */}
              {/* <Route path="about" element={<AboutPage />} /> */}



      </Routes>
  </BrowserRouter>,
)
