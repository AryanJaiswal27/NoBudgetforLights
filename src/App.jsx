import { useEffect, useRef } from "react"
import Hero from "./components/Hero"
import Download from "./components/Download"
import Guide from "./components/Guide"
import Footer from "./components/Footer"

function App() {

  const torchRef = useRef(null)

  useEffect(()=>{

    function move(e){

      if(!torchRef.current) return

      torchRef.current.style.background = `
        radial-gradient(
          circle 1200px at ${e.clientX}px ${e.clientY}px,
          transparent 0%,
          rgba(0,0,0,0.4) 40%,
          rgba(0,0,0,0.85) 70%,
          black 100%
        )
      `
    }

    window.addEventListener("mousemove", move)

    return () => window.removeEventListener("mousemove", move)

  },[])

  return (
    <>
      <div className="torch" ref={torchRef}></div>

      <Hero />
     
      <Guide />
      <Footer />
    </>
  )
}

export default App