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
       <Route path="/homepage"element={<HomePage />} />   
       <Route path="/fundiprofile"element={<FundiProfile />}/>  
       <Route path="/landpage"element={<LandingPage />}/> 
       <Route path="/head"element={<Header />}/> 
       <Route path="/product"element={<Product />}/> 
       <Route path="/generaldetails"element={<GeneralDetails />}/> 
       <Route path="/address"element={<Address />}/> 
       <Route path="/dateandtime"element={<DateandTime />}/> 
       <Route path="/priceandpayment"element={<PriceandPayment />}/> 

        </Routes>
      </Router>
    </div>
  );
}

export default App;
