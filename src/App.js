
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FundiProfile from './pages/FundiProfile';
import LandingPage from './components/landingpage/LandingPage';
import Header from './components/landingpage/header';
import Product from './components/carousel/Index';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
