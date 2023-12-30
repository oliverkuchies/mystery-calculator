import type Square from './square'

function drawSquare (squareArray: Square[]): void {
  const canvas = document?.getElementById('animation') as HTMLCanvasElement
  const context = canvas?.getContext('2d')

  if (context == null) {
    console.error('Could not get canvas context')
    return
  }

  // Update canvas height
  canvas.height = window.screen.height

  context.fillStyle = 'black'
  context.rect(0, 0, canvas.width, canvas.height)
  context.fill()

  for (let i = 0; i < squareArray.length; i++) {
    const b = squareArray[i]
    context.beginPath()
    context.rect(b.x, b.y, b.width, b.width)
    context.fillStyle = b.color + '0.2)'
    context.strokeStyle = b.color
    context.lineWidth = 2
    context.fill()
    context.stroke()

    context.fillStyle = 'white'

    const textWidth = context.measureText(b.text).width

    context.fillText(
      b.text,
      b.x + b.width / 2 - textWidth / 2,
      b.y + b.width / 2
    )

    b.x += b.vx * 0.5
    b.y += b.vy * 0.5
    b.width += 0.1

    if (b.x > canvas.width || b.x < 0 || b.y > canvas.height || b.y < 0) {
      setTimeout(
        () => {
          b.reset()
        },
        Math.min(5, Math.random() * 10000)
      )
    }
  }

  requestAnimationFrame(() => {
    drawSquare(squareArray)
  })
}

export default drawSquare
