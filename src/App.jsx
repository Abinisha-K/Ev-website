

import { useEffect, useState } from "react"

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import  Background  from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";


 const App = () => {
  let heroData =[
    {text1:'Dive into',text2:"what you love"},
    {text1:'Indulge',text2:"your passions"},
    {text1:'Give in to',text2:"your passions"},
  ]
  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
  },[])
  return (


    
    <div>

      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
     


     <Router>
            <Routes>
                <Route path="/" element={<Background />} />
                <Route path="/navbar" element={<Navbar />} />
                <Route path="/hero" element={<Hero />} />
                {/* Add other routes here */}
            </Routes>
        </Router>


    </div>
  )
}

export default App
