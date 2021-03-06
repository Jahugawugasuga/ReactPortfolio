import React from 'react';
import './App.css';
import { HashRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
 return (
   <Router>
     <div>
     <Navbar/>
     <Wrapper>
       <Header/>
       <Route exact path = "/contact" component = {Contact}/>
       <Route exact path = "/about" component = {About}/>
       <Route exact path = "/portfolio" component = {Portfolio}/>
       <Footer/>
     </Wrapper>
     </div>
   </Router>
 )
}

export default App;
