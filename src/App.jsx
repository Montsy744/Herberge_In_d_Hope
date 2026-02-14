import Navbar from "./Components/section/Navbar"
import Hero from "./Components/section/Hero"
import About from "./Components/section/About"
import ChefWord from "./Components/section/ChefWord"

function App() {

  return (
    <>
      <main className="min-h-screen bg-(--secondary)">
        <Navbar />
        <Hero />
        <About />
        <ChefWord />
      </main>
    </>
  )
}

export default App
