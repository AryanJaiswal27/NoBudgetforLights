import { useEffect, useRef } from "react"
import playerSprite from "../assets/player.png"
import obstacleSprite from "../assets/obstacle.png"

function DinoGame() {

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")



    ctx.imageSmoothingEnabled = false
    ctx.webkitImageSmoothingEnabled = false
    ctx.mozImageSmoothingEnabled = false    

    const SCALE = 4
    const PLAYER_SIZE = 16 * SCALE
    const OBSTACLE_SIZE = 12 * SCALE

    const playerImg = new Image()
    const obstacleImg = new Image()

    playerImg.src = playerSprite
    obstacleImg.src = obstacleSprite

    let playerX = 80
    let playerY = 200
    let velocity = 0

    let spacePressed = false

    let score = 0
    let gameSpeed = 6
    let shake = 0
    const gravity = 0.8
    const jumpForce = -14
    const ground = 200

    let obstacleX = canvas.width + 400
    let obstacleY = ground + (PLAYER_SIZE - OBSTACLE_SIZE)
    

    let gameOver = false
    let started = false

    let highScore = localStorage.getItem("highScore") || 0


    function resetGame() {
    playerY = ground
    velocity = 0
    obstacleX = canvas.width + 400
    gameOver = false
    started = true

    score = 0
    gameSpeed = 6
    }

    function checkCollision() {

  if (
    playerX < obstacleX + OBSTACLE_SIZE &&
    playerX + PLAYER_SIZE > obstacleX &&
    playerY < obstacleY + OBSTACLE_SIZE &&
    playerY + PLAYER_SIZE > obstacleY
  ) {

    if(!gameOver){
      shake = 20
    }

    gameOver = true
  }

}

    function update() {

      if (!started || gameOver) return

      velocity += gravity
      playerY += velocity

      if (playerY > ground) {
        playerY = ground
        velocity = 0
      }

      obstacleX -= gameSpeed

      if (obstacleX < -OBSTACLE_SIZE) {

        const randomGap = 200 + Math.random() * 400

        obstacleX = canvas.width + randomGap
        }
      checkCollision()


        score += 0.1
        gameSpeed = 6 + score * 0.02

        if(score > highScore){
        highScore = score
        localStorage.setItem("highScore", Math.floor(score))
}

    }

    function draw() {
        ctx.save()

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // ground
      ctx.fillStyle = "#444"
      ctx.fillRect(0, 180, canvas.width, 2)

      // player
      ctx.drawImage(playerImg, playerX, playerY, PLAYER_SIZE, PLAYER_SIZE)

      // obstacle
      ctx.drawImage(obstacleImg, obstacleX, obstacleY, OBSTACLE_SIZE, OBSTACLE_SIZE)

      if (shake > 0) {
    ctx.translate(
        Math.random() * shake - shake / 2,
        Math.random() * shake - shake / 2
    )
    shake--
    }

      if (!started) {
              ctx.font = "40px monospace"
        ctx.textAlign = "center"

        ctx.fillText(
          "PRESS SPACE TO START",
          canvas.width / 2,
          canvas.height / 2
        )
      }

      if (gameOver) {
        ctx.textAlign = "center"

        ctx.fillStyle = "white"
        ctx.font = "50px monospace"

        ctx.shadowColor = "white"
        ctx.shadowBlur = 20

        ctx.fillText(
        "GAME OVER",
        canvas.width/2,
        canvas.height/2 - 40
        )

        ctx.shadowBlur = 0
        ctx.font = "28px monospace"

        ctx.fillText(
        "Score: " + Math.floor(score),
        canvas.width/2,
        canvas.height/2 + 10
        )

        ctx.fillText(
        "Press Space to Restart",
        canvas.width/2,
        canvas.height/2 + 60
        )
      }

      ctx.textAlign = "left"
    ctx.fillStyle = "white"
    ctx.font = "24px monospace"

      ctx.shadowColor = "white"
        ctx.shadowBlur = 10
        ctx.fillText("Score: " + Math.floor(score), 20, 30)
        ctx.shadowBlur = 0

        ctx.fillText("High Score: " + Math.floor(highScore), 20, 55)

    ctx.restore()

    }

    function gameLoop() {

      update()
      draw()

      requestAnimationFrame(gameLoop)

    }

   function handleKeyDown(e) {

  if (e.code === "Space" && !spacePressed) {

    e.preventDefault()
    spacePressed = true

    if (!started) {
      resetGame()
    }

    else if (gameOver) {
      resetGame()
    }

    else if (playerY === ground) {
      velocity = jumpForce
    }

  }

}

function handleKeyUp(e) {
  if (e.code === "Space") {
    spacePressed = false
  }
}

document.addEventListener("keydown", handleKeyDown)
document.addEventListener("keyup", handleKeyUp)



    Promise.all([
      new Promise(res => playerImg.onload = res),
      new Promise(res => obstacleImg.onload = res)
    ]).then(() => {

      gameLoop()

    })

    return () => {
  document.removeEventListener("keydown", handleKeyDown)
  document.removeEventListener("keyup", handleKeyUp)
}

  }, [])

return (
 <canvas
  ref={canvasRef}
  width={1000}
  height={350}
  className="gameCanvas"
/>
)

}

export default DinoGame