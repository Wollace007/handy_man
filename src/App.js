import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FundiProfile from './pages/FundiProfile';
import LandingPage from './components/landingpage/LandingPage';
import Header from './components/landingpage/header';
import Product from './components/carousel/Index';
import GeneralDetails from './components/create_order/GeneralDetails';
import Address from './components/create_order/Address';
import DateandTime from './components/create_order/DateandTime';
import PriceandPayment from './components/create_order/PriceandPayment';
function App() {
  return (
    <div className="App">
     <Router>
        <Routes> 
       <Route path="/"element={<HomePage />} />   
       <Route path="/fundi-profile"element={<FundiProfile />}/>  
       <Route path="/landing-page"element={<LandingPage />}/> 
       <Route path="/head"element={<Header />}/> 
       <Route path="/product"element={<Product />}/> 
       <Route path="/general-details"element={<GeneralDetails />}/> 
       <Route path="/address"element={<Address />}/> 
       <Route path="/date-time"element={<DateandTime />}/> 
       <Route path="/price-payment"element={<PriceandPayment />}/> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
