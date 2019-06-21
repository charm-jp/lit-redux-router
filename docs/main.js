import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { connectRouter } from 'https://unpkg.com/lit-redux-router/dist/lit-redux-router.js?module';
import store from './store.js';

import './home.js';
connectRouter(store);

class AppMain extends LitElement {
  static get styles() {
    return css`
      main {
        min-height: 300px;
        box-sizing: border-box;
        padding: 80px 20px 20px;
        max-width: 1260px;
        margin: 0 auto;
      }
    `;
  }

  render() {
    return html`
      <main></main>
      <main>
        <lit-route path="/" component="app-home"></lit-route>
      </main>
    `;
  }
}

customElements.define('app-main', AppMain);
