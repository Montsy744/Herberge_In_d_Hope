import Navbar from "./Components/section/Navbar"
import Hero from "./Components/section/Hero"
import About from "./Components/section/About"

function App() {

  return (
    <>
      <main className="min-h-screen bg-(--secondary)">
        <Navbar />
        <Hero />
        <About />
        <div className="min-h-screen"></div>
      </main>
    </>
  )
}

export default App
