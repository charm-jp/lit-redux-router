import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';
import './code.js';

class AppGettingStarted extends LitElement {
  render() {
    return html`
      <style>
        @import url(https://unpkg.com/@material/typography/dist/mdc.typography.min.css);
      </style>
      <h2 class="mdc-typography--headline3">Getting Started</h2>

      <p>Install this library and its peer dependencies</p>

      <app-code>
yarn add lit-redux-router
yarn add lit-html lit-element pwa-helpers redux
<div>asdf</div>
      </app-code>

      <p>First the router needs to connect to a redux store.</p>

      <app-code>
import { LitElement, html } from 'lit-element';
import { connectRouter } from 'lit-redux-router';
import store from './store.js';

connectRouter(store);
      </app-code>

      <p>Add a <i>lit-route</i> element with a specific path and content</p>

      <app-code>
class MyApp extends LitElement {
  render() {
    return html\`
      &lt;div class="app-content"&gt;
        &lt;lit-route path="/"&gt;&lt;h1&gt;Home&lt;/h1&gt;&lt;/lit-route&gt;
      &lt;/div&gt;
    \`;
  }
}
customElements.define('my-app', MyApp);
      </app-code>
    `;
  }
}

customElements.define('app-getting-started', AppGettingStarted);
