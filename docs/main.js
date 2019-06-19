import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';

class AppMain extends LitElement {
  static get styles() {
    return css`
      main {
        min-height: 300px;
      }
    `;
  }

  render() {
    return html`
      <main></main>
    `;
  }
}

customElements.define('app-main', AppMain);
