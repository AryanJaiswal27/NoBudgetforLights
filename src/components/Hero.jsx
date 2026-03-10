import DinoGame from "./DinoGame"

function Hero() {
  return (
    <section className="hero">

      <div className="heroContent">

        <h1 className="logo">
          No Budget for Lights
        </h1>

        <p className="tagline">
          A brutal 2D platformer where darkness surrounds you and a single
          torch is your only guide.
        </p>

        <p className="description">
          Use physics, strange interactions and clever loopholes to navigate
          impossible levels. The game is extremely difficult and will probably
          enrage you — but beating it feels legendary.
        </p>

        <div className="heroButtons">
          <button>Download Windows</button>
          <button>Download Android</button>
        </div>

      </div>

      <div className="heroGame">
        <DinoGame />
      </div>

    </section>
  )
}

export default Hero