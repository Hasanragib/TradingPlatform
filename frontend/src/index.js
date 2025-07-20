import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { AuthProvider } from './Context/AuthContext.js';

import HomePage from './LandingPage/Home/HomePage.js';
import Login from './LandingPage/Login.js';
import SignUp from './LandingPage/Signup.js';
import About from './LandingPage/About/AboutPage.js';
import Products from './LandingPage/Products/ProductsPage.js';
import Pricing from './LandingPage/Pricing/PricingPage.js';
import Support from './LandingPage/Support/SupportPage.js';
import Navbar from './LandingPage/Navbar.js';
import Footer from './LandingPage/Footer.js';
import NotFound from './LandingPage/NotFound.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <AuthProvider>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={< HomePage />} />
        <Route path='/signup' element={< SignUp />} />
        <Route path='/login' element={< Login />} />
        <Route path='/about' element={< About />} />
        <Route path='/products' element={< Products />} />
        <Route path='/pricing' element={< Pricing />} />
        <Route path='/support' element={< Support />} />
        <Route path='*' element={< NotFound />} />
      </Routes>
    <Footer />  
    </BrowserRouter>  
  </AuthProvider>
);
