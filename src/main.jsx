import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.jsx';
import Crypto_Taxes from './components/Crypto_Taxes/Crypto_Taxes.jsx';
import Free_Tools from './components/Free_tools/Free_Tools.jsx';
import Resources_center from './components/resources/Resources_center.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path = "" element={<Home />} />
        <Route path = "Crypto_taxes" element={<Crypto_Taxes />} />
        <Route path="free_tools" element={<Free_Tools />} />
        <Route path="resources" element={<Resources_center />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
