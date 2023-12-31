import './components/calculator'
import './components/card'
import './components/number'

import { LitElement, html, css, type TemplateResult } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import './pages/welcome'
import './pages/result'
import globalStyles from './common/styles'
@customElement('mystery-calculator')
export class App extends LitElement {
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
        overflow: auto;
      }
      
      footer {
        font-size: 0.8rem;
        color: #ccc;
        text-align: center;
        padding: 20px 0px 10px 0px;
      }
      
      footer a {
        color: #ccc;
      }
    `
  ]

  @state()
  private currentPage = 'welcome'

  public setCurrentPage (changeEvent: CustomEvent): void {
    this.currentPage = changeEvent.detail
  }

  private getCurrentPage (): TemplateResult {
    // Run resize
    window.dispatchEvent(new Event('resize'))

    switch (this.currentPage) {
      case 'calculator':
        return html`<app-calculator
          @change-page=${this.setCurrentPage.bind(this)}
        ></app-calculator>`
      case 'result':
        return html`<app-result
          @change-page=${this.setCurrentPage.bind(this)}
        ></app-result>`
      case 'welcome':
      default:
        return html`<app-welcome
          @change-page=${this.setCurrentPage.bind(this)}
        ></app-welcome>`
    }
  }

  override render (): TemplateResult {
    return html`
      <div class="page-wrapper">
        <div class="page-content">
          ${this.getCurrentPage()}
          <footer>Project created by <a href="https://www.linkedin.com/in/oliverkucharzewski" target="__blank">Oliver Kucharzewski</a></footer>
        </div>
      </div>
    `
  }
}
