import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Feature from "./Components/Feature";
import Workflow from "./Components/Workflow";
import Price from "./Components/Price";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div>
        <Nav/>
        <div className="max-w-7x mx-auto pt-20 px-8">
          <Hero/>
          <Feature/>
          <Workflow/>
          <Price/>
          <Testimonial/>
          <Footer/>
        </div>
    </div>
  )
}

export default App;
