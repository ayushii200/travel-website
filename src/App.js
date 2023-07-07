import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";
import Ticket from "./Ticket";
import Footer from "./Footer";
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" Component ={Home}/>
  <Route path="/service" Component ={Service}/>
  <Route path="/about" Component ={About}/>
  <Route path="/contact" Component ={Contact}/>
  <Route path="/ticket" Component ={Ticket}/>
</Routes>
</BrowserRouter>
<Footer/>
</>
  );
}

export default App;
