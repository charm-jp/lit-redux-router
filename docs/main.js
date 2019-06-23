import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { connectRouter } from 'https://unpkg.com/lit-redux-router/dist/lit-redux-router.js?module';
import store from './store.js';

import './home.js';
import './getting-started.js';
import './not-found.js';

connectRouter(store);

class AppMain extends LitElement {
  static get styles() {
    return css`
      .app-main {
        max-width: 1260px;
        margin: 0 auto;
        position: relative;
        padding-right: 250px;
        box-sizing: border-box;
      }

      main {
        min-height: 300px;
        box-sizing: border-box;
        padding: 80px 20px 20px;
      }

      aside {
        box-sizing: border-box;
        padding: 113px 20px 20px;
        position: absolute;
        top: 0;
        right: 0;
        width: 250px;
      }

      aside a {
        color: inherit;
        text-decoration: none;
      }

      aside a:hover {
        text-decoration: underline;
      }
    `;
  }

  render() {
    return html`
      <style>
        @import url(https://unpkg.com/@material/typography/dist/mdc.typography.min.css);
      </style>
      <div class="app-main">
        <main>
          <lit-route component="app-not-found"></lit-route>
          <lit-route path="/" component="app-home"></lit-route>
          <lit-route path="/getting-started" component="app-getting-started"></lit-route>
        </main>
        <aside>
          <nav>
            <h1 class="mdc-typography--headline5">Content table</h1>
            <a href="/getting-started">Getting Started</a>
          </nav>
        </aside>
      </div>
    `;
  }
}

customElements.define('app-main', AppMain);
