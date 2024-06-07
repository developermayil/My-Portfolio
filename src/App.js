import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import MyGallery from "./components/gallery";
import DrawerAppBar from "./components/header";
import Preloader from "./components/preloader";
import MySlider from "./components/sidebar";
import React, { useState, useEffect } from 'react';
import Skill from "./components/skill";
import { LinearProgress } from "@mui/material";
import TopArrow from "./components/toparow";




function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);  

    return () => clearTimeout(timer);  
  }, []);

  if (loading) {
    return <Preloader />;
  }




  return (
    <>
      <DrawerAppBar />
      <MySlider />
      <About />
      <Skill/>
      <LinearProgress/>
      <MyGallery/>
      <LinearProgress/>
      <Contact />
      <Footer />
      <TopArrow/>
     
     
    </>


  );
}

export default App;
