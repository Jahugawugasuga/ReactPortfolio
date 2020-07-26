import React from 'react';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"

function App() {
 return (
   <Router>
     <Navbar/>
     <Wrapper>
       <Header/>
       <Route exact path = "/" component = {Home}/>
       <Route exact path = "/contact" component = {Contact}/>
       <Route exact path = "/about" component = {About}/>
       <Route exact path = "/portfolio" component = {Portfolio}/>
       <Footer/>
     </Wrapper>
   </Router>
 )
}

export default App;