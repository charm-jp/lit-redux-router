import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { connectRouter } from 'https://unpkg.com/lit-redux-router/dist/lit-redux-router.js?module';
import store from './store.js';

connectRouter(store);

class AppMain extends LitElement {
  static get styles() {
    return css`
      main {
        min-height: 300px;
        padding: 64px 24px 24px;
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
