import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module';
import { connectRouter } from 'https://unpkg.com/lit-redux-router/dist/lit-redux-router.js?module';
import store from './store.js';

import './home.js';
import './getting-started.js';
import './render-content.js';
import './not-found.js';
import './footer.js';

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
          <lit-route path="/render-content-for-a-route" component="app-render-content"></lit-route>
        </main>
        <aside>
          <nav>
            <h1 class="mdc-typography--headline5">Content table</h1>
            <ul>
              <li><a href="/getting-started">Getting Started</a></li>
              <li>
                <a href="/render-content-for-a-route">Render content for a route</a>
                <ul>
                  <li><a href="#with-children-elements">with children elements</a></li>
                  <li><a href="#with-a-component">with a component</a></li>
                </ul>
              </li>
              <li>
                <a href="">Matching cases for route paths</a>
                <ul>
                  <li><a href="#">text path</a></li>
                  <li><a href="#">path with variables</a></li>
                  <li><a href="#">not found path</a></li>
                  <li><a href="#">every route except matching route</a></li>
                </ul>
              </li>
              <li>
                <a href="">Trigger a route path</a>
                <ul>
                  <li><a href="#">with links</a></li>
                  <li><a href="#">with a redux action</a></li>
                </ul>
              </li>
              <li><a href="">Nesting routes</a></li>
              <li>
                <a href="">Scroll</a>
                <ul>
                  <li><a href="#">Scroll into view</a></li>
                  <li><a href="#">Smooth scrolling</a></li>
                  <li><a href="#">Disable default scroll to top</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
        <app-footer></app-footer>
      </div>
    `;
  }
}

customElements.define('app-main', AppMain);
