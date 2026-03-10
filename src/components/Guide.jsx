import torch from "../assets/torch.jpeg"
import controls from "../assets/controls.jpeg"
import doubleJump from "../assets/doublejump.jpeg"
import spikes from "../assets/spikes.jpeg"
import arrow from "../assets/arrow.jpeg"
import zoom from "../assets/zoom.jpeg"
import flag from "../assets/flag.jpeg"
import babyMode from "../assets/babymode.jpeg"
import levels from "../assets/levels.jpeg"

function Guide() {
  return (
    <section className="guide">

     <h2 className="guideTitle">How to Play</h2>



  <div className="guideItem">
    <img src={controls} alt="controls" />
    <div className="guideText">
      <h3>Controls</h3>
      <p><b>Windows / PC</b></p>
      <p>A / D → Move</p>
      <p>Space → Jump</p>
      <p><b>Android</b></p>
      <p>Use the on-screen arrow buttons.</p>
    </div>
  </div>

  <div className="guideItem">
    <img src={torch} alt="torch" />
    <div className="guideText">
      <h3>Darkness</h3>
      <p>The world is almost completely dark.</p>
      <p>Your only light source is a small torch that follows the player.</p>
      <p>Everything outside the torch radius is hidden.</p>
    </div>
  </div>

  <div className="guideItem">
    <img src={flag} alt="flag" />
    <div className="guideText">
      <h3>Objective</h3>
      <p>Reach the <b>flag</b> to complete the level.</p>
      <p>A white arrow points toward the flag — but it may not always show the correct path.</p>
    </div>
  </div>

  <div className="guideItem">
    <img src={doubleJump} alt="double jump" />
    <div className="guideText">
      <h3>Double Jump</h3>
      <p>The player has <b>two jumps</b>.</p>
      <p>Jumps replenish only after touching the ground.</p>
      <p>Damage blocks do not reset your jumps.</p>
    </div>
  </div>

  <div className="guideItem">
    <img src={spikes} alt="spikes" />
    <div className="guideText">
      <h3>Health & Hazards</h3>
      <p>You start each level with <b>5 hearts</b>.</p>
      <p>Touching spikes instantly removes one heart.</p>
      <p>Remaining in contact drains one heart every 0.5 seconds.</p>
      <p>If all hearts are lost, the level restarts. There are no checkpoints.</p>
    </div>
  </div>

  <div className="guideItem">
    <img src={zoom} alt="zoom" />
    <div className="guideText">
      <h3>Zoom Slider</h3>
      <p>You can zoom in or out using the zoom slider.</p>
      <p>Zooming out may reveal paths that are otherwise hidden.</p>
    </div>
  </div>

  <div className="guideItem">
    <img src={arrow} alt="arrow" />
    <div className="guideText">
      <h3>Finding Loopholes</h3>
      <p>Levels reward experimentation.</p>
      <p>Players often discover clever tricks such as collision exploitation, unexpected paths, and creative double jump usage.</p>
    </div>
  </div>

  <div className="guideItem">
    <img src={babyMode} alt="baby mode" />
    <div className="guideText">
      <h3>Baby Mode</h3>
      <p>Baby Mode adds lightning flashes that briefly illuminate the entire level.</p>
      <p>This makes navigation much easier for newer players.</p>
    </div>
  </div>

<div className="guideItem">
  <img src={levels} alt="levels" /> 
  <div className="guideText">
    <h3>Levels</h3>
    <p>
      The game currently has <b>12 handcrafted levels</b> featuring
      both short puzzle rooms and longer platforming sections.
    </p>
    <p>
      The early levels are easy, but later ones become extremely difficult.
    </p>
  </div>
</div>


    </section>
  )
}

export default Guide