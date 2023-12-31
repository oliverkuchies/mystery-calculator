import { LitElement, html, css, type TemplateResult } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import calculationStore from '../store/calculation-store'
import globalStyles from '../common/styles'

@customElement('app-card')
export class Card extends LitElement {
  static override styles = [
    globalStyles,
    css`
      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: var(--bg);
        border: 1px solid black;
        border-radius: 10px;
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-between;
        box-sizing: border-box;

        &.selected {
          background-color: var(--bg-hover);
          border: 4px solid #ff6c6c;
        }

        &:hover {
          cursor: pointer;
          background-color: var(--bg-hover);
        }
      }
    `
  ]

  @property({ type: Number })
  private readonly index = 0

  @state()
  private selected = false

  static getColorByIndex (index: number = 0): string {
    const randomColors = [
      '#3498db', // Dodger Blue
      '#2ecc71', // Emerald
      '#e74c3c', // Alizarin Crimson
      '#1abc9c', // Turquoise
      '#9b59b6', // Amethyst
      '#f1c40f' // Sunflower
    ]
    return randomColors[index]
  }

  static getBackgroundColorByIndex (index: number = 0): string {
    const randomColors = [
      '#2980b9', // Belize Hole
      '#27ae60', // Nephritis
      '#c0392b', // Pomegranate
      '#16a085', // Green Sea
      '#8e44ad', // Wisteria
      '#f39c12' // Orange
    ]
    return randomColors[index]
  }

  override connectedCallback (): void {
    super.connectedCallback()
    this.style.setProperty('--bg', Card.getColorByIndex(this.index))

    this.style.setProperty(
      '--bg-hover',
      Card.getBackgroundColorByIndex(this.index)
    )
  }

  private selectCard (): void {
    this.selected = !this.selected

    calculationStore.updateCard(this.index, {
      ...calculationStore.cards[this.index],
      selected: this.selected
    })

    if (this.selected) {
      this.style.setProperty(
        '--bg',
        Card.getBackgroundColorByIndex(this.index)
      )
    } else {
      this.style.setProperty('--bg', Card.getColorByIndex(this.index))
    }
  }

  override render (): TemplateResult {
    return html`
      <div
        data-testid="card-${this.index}"
        @click=${() => {
          this.selectCard()
        }}
        class="${this.selected ? 'selected' : ''}"
      >
        <slot></slot>
      </div>
    `
  }
}
