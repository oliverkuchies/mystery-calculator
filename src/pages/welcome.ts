import { LitElement, html, css, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import globalStyles from '../common/styles'

@customElement('app-welcome')
export class Welcome extends LitElement {
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
    `
  ]

  changePage (page: string): void {
    this.dispatchEvent(new CustomEvent('change-page', { detail: page }))
  }

  override render (): TemplateResult {
    return html`
      <h1>You are encountering the Mystery Calculator.</h1>
      <h2>The mystery calculator knows all..</h2>
      <p>Pick a number, and I will know what value you have picked.</p>
      <p>Are you ready to begin?</p>
      <button
        @click=${() => {
          this.changePage('calculator')
        }}
      >
        Lets go!
      </button>
    `
  }
}
