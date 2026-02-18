import Navbar from "./Components/section/Navbar"
import Hero from "./Components/section/Hero"
import About from "./Components/section/About"
import ChefWord from "./Components/section/ChefWord"
import ImagesGallery from "./Components/ImagesGallery"
import Services from "./Components/section/Services"
import Carte from "./Components/section/Carte"
import Info from "./Components/section/Info"

import { SpeedInsights } from '@vercel/speed-insights/react';

import { liensImg1 } from "../constant/constant"

function App() {

  return (
    <>
      <main className="min-h-screen bg-(--secondary)">
        <Navbar />
        <Hero />
        <About />
        <ChefWord />
        <ImagesGallery images={ liensImg1 }/>
        <Services />
        <Info />
        <div className="min-h-screen"></div>
      </main>
      <SpeedInsights />
    </>
  )
}

export default App
