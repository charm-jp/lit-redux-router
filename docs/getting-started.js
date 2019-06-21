import { LitElement, html } from 'https://unpkg.com/lit-element/lit-element.js?module';

class AppGettingStarted extends LitElement {
  render() {
    return html`
      <style>
        @import url(https://unpkg.com/@material/typography/dist/mdc.typography.min.css);
      </style>
      <h2 class="mdc-typography--headline3">Getting Started</h2>

      <p>Install this library and its peer dependencies</p>

      <pre>
        <code>
          yarn add lit-redux-router
          yarn add lit-html lit-element pwa-helpers redux
        </code>
      </pre>

      <p>First the router needs to connect to a redux store.</p>

      <pre>
        <code>
          import { LitElement, html } from 'lit-element';
          import { connectRouter } from 'lit-redux-router';
          import store from './store.js';

          connectRouter(store);
        </code>
      </pre>

      <p>Add a <i>lit-route</i> element with a specific path and content</p>

      <pre>
        <code>
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
        </code>
      </pre>
    `;
  }
}

customElements.define('app-getting-started', AppGettingStarted);
