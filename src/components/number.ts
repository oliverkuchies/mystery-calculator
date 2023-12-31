import { LitElement, html, css, type TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'
import globalStyles from '../common/styles'

@customElement('app-number')
export class Number extends LitElement {
  static override styles = [
    globalStyles,
    css`
      span {
        color: white;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        border-radius: 50%;
        font-size: 1.2rem;
        font-weight: bold;
        min-width: 40px;
        min-height: 40px;
        padding: 2px;
      }
    `
  ]

  override render (): TemplateResult {
    return html` <span><slot></slot></span> `
  }
}
