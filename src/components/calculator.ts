import { LitElement, html, css, type TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { generateInitialCards, retrieveBitwiseIntegers } from '../logic'
import CalculationObservable from '../store/calculation-store'
import globalStyles from '../common/styles'

@customElement('app-calculator')
export class Calculator extends LitElement {
  static override styles = [
    globalStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    `
  ]

  @state()
  private userHasSelectedNumber = false

  override render (): TemplateResult {
    const defaultCards = generateInitialCards([1])
    const bitwiseCards = retrieveBitwiseIntegers(defaultCards)

    CalculationObservable.storeCards(
      bitwiseCards.map((cardValues) => ({
        trickNumber: cardValues[0],
        numberSet: cardValues,
        selected: false
      }))
    )

    const cards = bitwiseCards.map(
      (cardValues, index: number) =>
        html` <app-card index="${index}"
          >${cardValues.map((value) => html`<app-number>${value}</app-number>`)}
        </app-card>`
    )

    if (this.userHasSelectedNumber) {
      return html`
        <h1>Please select the cards that contain your number.</h1>
        ${cards}
        <p>
          When you have selected one or more cards, please click the button
          below.
        </p>
        <button
          @click=${() =>
            this.dispatchEvent(
              new CustomEvent('change-page', { detail: 'result' })
            )}
        >
          Guess my number!
        </button>
      `
    } else {
      return html`
        <h1>Choose a number between 1 and 63</h1>
        <p>Don't tell me what it is, just remember it.</p>
        <button
          @click=${() => {
            this.userHasSelectedNumber = true
          }}
        >
          I have a number
        </button>
      `
    }
  }
}
