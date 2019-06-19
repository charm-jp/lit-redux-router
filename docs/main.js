import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { connectRouter } from 'https://unpkg.com/lit-redux-router/dist/index.js?module';

import store from './store.js';

connectRouter(store);

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
