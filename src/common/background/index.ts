import drawSquare from './square-engine'
import Square from './square'

const numSquares = 50

const squareArray: Square[] = []

for (let i = 0; i < numSquares; i++) {
  squareArray.push(new Square())
}

drawSquare(squareArray)
