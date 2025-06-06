import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/root';
import { About, Contact, Faqs,  TandC ,Error } from './Pages';
import { Toaster } from 'react-hot-toast';
import Gallery from './Pages/Gallery/Gallery';

import { LitigationSupport ,TestAnal, BoroscopeInspection, EnvironmentalP, RadiationSafety, LandRem } from './Pages';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <App />
      },
      {
        path: 'about-us',
        element: <About/>
      },
      {
        path: 'contact-us',
        element: <Contact/>
      },
      {
        path: 'faqs',
        element: <Faqs/>
      },
      {
        path: 'terms-and-conditions',
        element: <TandC/>
      },
      {
        path: 'our-collections',
        element : <Gallery/>
      },
     
      {
        path: 'land-remediation',
        element: <LandRem/>
      },
      {
        path: 'radiation-safety-protection',
        element: <RadiationSafety/>
      },
      {
        path: 'litigation-support',
        element: <LitigationSupport/>
      },
      
      {
        path: 'environmental-protection',
        element: <EnvironmentalP/>
      },
      {
        path: 'boroscope-inspection',
        element: <BoroscopeInspection/>
      },
      {
        path: 'testing-analysis',
        element: <TestAnal/>
      },
    
    ]
  },
  {
    path:"*",
    element: <Error/>
  }
 
]);
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <Toaster/>
<RouterProvider router={router} />
</React.StrictMode>
);