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
        --aside-width: 400px;
        max-width: 1260px;
        margin: 0 auto;
        position: relative;
        padding-right: var(--aside-width);
        box-sizing: border-box;
      }

      main {
        min-height: 300px;
        box-sizing: border-box;
        padding: 80px 40px 20px 20px;
      }

      aside {
        box-sizing: border-box;
        padding: 113px 20px 20px 40px;
        position: fixed;
        height: 100%;
        top: 0;
        right: 0;
        width: calc((100vw - 1260px) / 2 + var(--aside-width));
        background-color: #ECEFF1;
      }

      aside a {
        color: inherit;
        text-decoration: none;
      }

      aside a:hover {
        text-decoration: underline;
      }

      aside ul {
        list-style: none;
        padding: 0;
      }

      aside li {
        margin: 10px 0;
      }

      aside ul ul {
        margin-left: 20px;
      }

      aside ul ul li {
        margin: 5px 0;
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
            <ul>
              <li><a href="/getting-started">Getting Started</a></li>
            </ul>
          </nav>
        </aside>
      </div>
    `;
  }
}

customElements.define('app-main', AppMain);
