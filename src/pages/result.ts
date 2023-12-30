import { LitElement, html, css, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import calculationStore from '../store/calculation-store'
import globalStyles from '../common/styles'

@customElement('app-result')
export class Result extends LitElement {
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
      }

      h1 {
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
      }
    `
  ]

  override render (): TemplateResult {
    // Move user to top of screen
    window.scrollTo(0, 0)

    return html`
      <h1>I know your number!</h1>
      <p>It is ${calculationStore.guessNumber()}</p>
      <button
        @click=${() =>
          this.dispatchEvent(
            new CustomEvent('change-page', { detail: 'welcome' })
          )}
      >
        Play again!
      </button>
    `
  }
}
