import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  return (
    <>   
{/* <Navbar/>
<Textform/>
<About/> */}




  
    <Navbar title="TurnOnText"/> 
      
    <div className="container">
    {/* <Routes>
          <Route path="/about">
            <About />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          {/* <Route path="/">
            <Home />
          </Route> */}
        {/* </Routes> */}
    
          
            {/* <About /> */}
        
          
          <Textform heading="Enter the text to analyze"/>
        
   
    {/* <About/>  */}
    </div>


   

</>
  );
}

export default App;
