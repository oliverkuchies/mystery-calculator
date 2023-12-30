class Square {
  x: number = 0
  y: number = 0
  width: number = 0
  color: string = ''
  vx: number = 0
  vy: number = 0
  text: string = ''

  ctx: CanvasRenderingContext2D | null = null
  c: HTMLCanvasElement | null = null

  constructor () {
    this.init()

    window.addEventListener('resize', () => {
      this.init()
    })
  }

  init (): void {
    this.c = document.getElementById('animation') as HTMLCanvasElement
    this.c.width = window.innerWidth
    this.c.height = window.innerHeight
    this.ctx = this.c.getContext('2d')

    const items = [
      '47, 72, 88,',
      '246, 174, 45,',
      '242, 100, 25,',
      '176, 58, 46,',
      '129, 197, 60,',
      '240, 173, 78,',
      '38, 70, 83,',
      '82, 40, 136,',
      '200, 214, 229,',
      '255, 185, 0,',
      '66, 165, 245,',
      '121, 85, 72,',
      '33, 150, 243,',
      '85, 221, 224,',
      '51, 101, 138,',
      '255, 152, 0,',
      '92, 107, 192,',
      '78, 121, 147,',
      '213, 94, 0,',
      '155, 89, 182,'
    ]

    const color = items[Math.floor(Math.random() * items.length)]

    this.x = this.c.width / 2
    this.y = this.c.height / 2
    this.width = Math.floor(Math.random() * 12) + 4
    this.text = Math.round(Math.random() * 64).toString()
    this.color = 'rgba(' + color + ' ' + Math.random() + ')'
    this.vx = Math.random() * 8 - 4
    this.vy = Math.random() * 8 - 4
  }

  reset (): void {
    const baseSize = 10

    if (this.c == null) {
      console.error('Could not get canvas element')
      return
    }

    this.x = this.c.width / 2
    this.y = this.c.height / 2
    this.width = Math.floor(Math.random() * 12) + 4 + baseSize
  }
}

export default Square
